import { PureComponent } from 'react'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'

import { loginUser, changeLanguageToENG, changeLanguageToPL } from '../../Redux/actions'
import authorisation from '../../API/authorisation'

class LayoutLogic extends PureComponent{

  checkIfUserIsLogged = async () => {
    const passport = Cookies.get( 'passport' )
    if( passport ){
      const user = await authorisation( passport )
      if( user ){
        this.props.login({
          username: user.username,
          privileges: user.privileges,
          email: user.email,
          name: user.name,
          surname: user.surname,
          phone: user.phone,
          id: user.id
        })
      }
    }
  }

  checkBrowserLanguage = () => {
    const browserLanguage = navigator.language;

    if( browserLanguage === 'pl-PL' ){
      this.props.setLanguageToPL();
    }
    else{
      this.props.setLanguageToEN();
    }

  }

  componentDidMount(){
    this.checkIfUserIsLogged();
    this.checkBrowserLanguage();
  }
  
  render(){
    return this.props.render({

    })
  }
}

export default connect(
  state => ({
    user: state.user,
    language: state => language
  }),
  dispatch => ({
    login: user => dispatch( loginUser( user ) ),
    setLanguageToPL: () => dispatch( changeLanguageToPL() ),
    setLanguageToEN: () => dispatch( changeLanguageToENG() )
  })
)(LayoutLogic)