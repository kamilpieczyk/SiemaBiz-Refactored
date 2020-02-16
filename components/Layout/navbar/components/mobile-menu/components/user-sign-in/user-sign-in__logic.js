import PropTypes from 'prop-types'
import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import POST from '../../../../../../../API/post'
import auth from '../../../../../../../API/authorisation'
import { loginUser } from '../../../../../../../Redux/actions'

const UserSignInLogic = ({ render }) => {

  const [ username, setUsername ] = useState( '' )
  const [ password, setPassword ] = useState( '' )
  const [ isLoading, setLoading ] = useState( false )
  const [ messangeLogin, setMessangeLogin ] = useState( '' );
  const [ messangePassword, setMessangePassword ] = useState( '' );

  const languageSource = useSelector( state => state.language.source );

  const dispatch = useDispatch();

  const handleSubmitForm = e => {
    e.preventDefault();
    setLoading( true );
    messangeLogin && setMessangeLogin( "" );
    messangePassword && setMessangePassword( "" );
    POST( 'login', { username, password } )
      .then( res => {
        
        setLoading( false );
        if( res.status === 'user_not_exisit' ) setMessangeLogin( languageSource.navbar.userNotExist )
        if( res.status === 'wrong_pwd' ){
          setMessangePassword( languageSource.navbar.wrongPassword )
          setPassword( '' )
        }
        if( res.status === 'logged' ){

          window.localStorage.setItem( 'passport', res.passport );

          auth( res.passport )
            .then( res => {
              if( res.status === 'authorised' ){
                dispatch( loginUser({
                  username: res.username,
                  privileges: res.privileges,
                  email: res.email,
                  name: res.name,
                  surname: res.surname,
                  phone: res.phone,
                  id: res.id
                }) )
              }
              else{
                setMessangeLogin( languageSource.navbar.somethingWentWrong )
              }
            } )

        }
      } )
  }


  return render({
    languageSource,
    state: {
      username,
      password,
      isLoading,
      messangeLogin,
      messangePassword
    },
    setState: {
      setUsername,
      setPassword
    },
    handleSubmitForm
  })
}

UserSignInLogic.propTypes = {
  render: PropTypes.func.isRequired
}

export default UserSignInLogic