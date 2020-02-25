import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { useState, useRef, useEffect } from 'react'

import POST from '../../../API/post'
import auth from '../../../API/authorisation'

const ProfileSettingsLogicLayer = ({ render }) => {

  const [ email, setEmail ] = useState( '' );
  const [ isEmailChanging, setEmailChanging ] = useState( false );
  const [ phone, setPhone ] = useState( '' );
  const [ isPhoneChanging, setPhoneChanging ] = useState( false );
  const [ name, setName ] = useState( '' );
  const [ isNameChanging, setNameChanging ] = useState( false );
  const [ surname, setSurname ] = useState( '' );
  const [ isSurnameChanging, setSurnameChanging ] = useState( false );
  const [ isLoading, setLoading ] = useState( false );

  const user = useSelector( s => s.user );
  const username = useSelector( s => s.user.username );
  const emailRedux = useSelector( s => s.user.email );
  const phoneRexdux = useSelector( s => s.user.phone );
  const nameRedux = useSelector( s => s.user.name );
  const surnameRedux = useSelector( s => s.user.surname );

  const language = useSelector( s => s.language.source );

  const breadcrumbs = [ language.userPanel.title ];

  const activeInputRef = useRef();
  const handleFocusOnInput = () => activeInputRef.current.focus();

  const InformationsArray = [
    {
      title: language.userPanel.userSettings.email,
      icon: 'alternate_email',
      information: emailRedux,
      value: email,
      onChangeFunction: e => setEmail( e.target.value ),
      editFunction: () => setEmailChanging( !isEmailChanging ),
      changingState: isEmailChanging
    },
    {
      title: language.userPanel.userSettings.phone,
      icon: 'phone_iphone',
      information: phoneRexdux,
      value: phone,
      onChangeFunction: e => setPhone( e.target.value ),
      editFunction: () => setPhoneChanging( !isPhoneChanging ),
      changingState: isPhoneChanging
    },
    {
      title: language.userPanel.userSettings.name,
      icon: 'assignment_ind',
      information: nameRedux,
      value: name,
      onChangeFunction: e => setName( e.target.value ),
      editFunction: () => setNameChanging( !isNameChanging ),
      changingState: isNameChanging
    },
    {
      title: language.userPanel.userSettings.surname,
      icon: 'assignment',
      information: surnameRedux,
      value: surname,
      onChangeFunction: e => setSurname( e.target.value ),
      editFunction: () => setSurnameChanging( !isSurnameChanging ),
      changingState: isSurnameChanging
    }
  ];

  const handleSubmitInformations = async () => {
    setLoading( true );

    const body = {
      id: user.id,
      email: email || null,
      phone: phone || null,
      name: name || null,
      surname: surname || null
    };

    const authorisation = await auth();

    if( authorisation.status === 'authorised' ){
      const res = await POST( 'edit-user-details', body );
      if( res.status = 'updated' ){
        setLoading( false );
      }
    }
  }
  
  return render({
    breadcrumbs,
    username,
    InformationsArray,
    activeInputRef,
    handleFocusOnInput,
    handleSubmitInformations,
    isLoading
  })
}

ProfileSettingsLogicLayer.propTypes = {
  render : PropTypes.func.isRequired
}

export default ProfileSettingsLogicLayer