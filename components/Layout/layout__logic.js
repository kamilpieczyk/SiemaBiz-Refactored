import { PureComponent } from 'react'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'

import authorisation from '../../API/authorisation'
import {
  loginUser,
  changeLanguageToENG,
  changeLanguageToPL,
  setScreenResolutionToMobile,
  setScreenResolutionToDesktop
} from '../../Redux/actions'

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

  checkDeviceScreenResolution = () => {
    const mobileResolution = 800;
    let windowResolution = window.innerWidth;
    if( windowResolution <= mobileResolution ) this.props.setScreenResolutionToMobile()
    else this.props.setScreenResolutionToDesktop()

    window.addEventListener( 'resize', () => {
      windowResolution = window.innerWidth;
      if( windowResolution <= mobileResolution ) this.props.setScreenResolutionToMobile()
      else this.props.setScreenResolutionToDesktop()
    } )
    
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
    this.checkDeviceScreenResolution();
  }

  componentWillUnmount(){
    window.removeEventListener( 'resize' )
  }
  
  render(){
    return this.props.render({

    })
  }
}

export default connect(
  state => ({
    user: state.user,
    deviceScreen: state.deviceScreen
  }),
  dispatch => ({
    login: user => dispatch( loginUser( user ) ),
    setLanguageToPL: () => dispatch( changeLanguageToPL() ),
    setLanguageToEN: () => dispatch( changeLanguageToENG() ),
    setScreenResolutionToMobile: () => dispatch( setScreenResolutionToMobile() ),
    setScreenResolutionToDesktop: () => dispatch( setScreenResolutionToDesktop() ),
  })
)(LayoutLogic)