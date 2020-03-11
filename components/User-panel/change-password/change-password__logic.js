import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import authorisation from '../../../API/authorisation'
import post from '../../../API/post';

import { setPopupWindowActive } from '../../../Redux/actions'

const ChangePasswordLogicLayer = ({ render }) => {

  const [ step, setStep ] = useState( 1 );
  const [ oldPassword, setOldPassword ] = useState( '' );
  const [ newPassword, setNewPassword ] = useState( '' );
  const [ reNewPassword, setReNewPassword ] = useState( '' );
  const [ isLoading, setLoading ] = useState( false );
  const [ isErr, setErr ] = useState( false );

  const user = useSelector( s => s.user );
  const language = useSelector( s => s.language.source );
  const dispatch = useDispatch();

  const inputHandle = ( value, name ) => {
    // HANDLER FOR ALL INPUTS

    switch( name ){
      case "oldPassword":
        setOldPassword( value );
      break

      case "newPassword":
        setNewPassword( value );
      break

      case "reNewPassword":
        setReNewPassword( value );
      break

      default: return null
    }
  }

  const handleSubmit = async () => {
    setLoading( true );

    const setError = () => {
      setLoading( false );
      setErr( true );
    }

    if( step === 1 ){
      const auth = await authorisation();
      
      if( auth.status === 'authorised' ){
        const username = auth.username;
        const passCheck = await post( 'check-password', { username, password:oldPassword } );
        if( passCheck.status === 'ok' ){
          setLoading( false );
          setErr( false );
          setOldPassword( '' );
          setStep( 2 );
        }
        else setError();
      }
      else setError();
    }

    else if( step === 2 ){
      setLoading( true );
      const regEx = new RegExp( "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9@#$%^&*!?]{8,})$" );
      const check = newPassword.match( regEx );

      if( check ){
        setErr( false );
        setLoading( false );
        setStep( 3 );
      }

      else setError();
    }

    else if ( step === 3 ){
      if( newPassword === reNewPassword ){
        
        const changePassword = await post( 'change-password', {
          username: user.username,
          newPassword
        } );

        if( changePassword.status === 'ok' ){
          setLoading( false );
          setErr( false );
          setStep( 4 );
        }

        else {
          dispatch( setPopupWindowActive({
            title: language.general.popups.wrong.title,
            messenge: language.general.popups.wrong.messenge
          }) );
          setLoading( false );
          setErr( false );
        }

      }
      else setError();
    }

  }

  return render({
    state: { step, oldPassword, newPassword, reNewPassword, isLoading, isErr },
    inputHandle,
    handleSubmit,
  })
}

ChangePasswordLogicLayer.propTypes = {
  render: PropTypes.func.isRequired,
}

export default ChangePasswordLogicLayer