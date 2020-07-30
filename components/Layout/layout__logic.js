import { Component } from 'react';
import { connect } from 'react-redux';

import {
  loginUser,
  changeLanguageToENG,
  changeLanguageToPL,
  setScreenResolutionToMobile,
  setScreenResolutionToDesktop,
} from '../../Redux/actions';
import { mobile } from '../../styles/devices';

class LayoutLogic extends Component {
  checkDeviceScreenResolution = () => {
    const mobileResolution = mobile;
    let windowResolution = window.screen.availWidth;
    if (windowResolution <= mobileResolution) this.props.setScreenResolutionToMobile();
    else this.props.setScreenResolutionToDesktop();
  };

  checkBrowserLanguage = () => {
    const browserLanguage = navigator.language.slice(0, 2);

    if (browserLanguage === 'pl') {
      this.props.setLanguageToPL();
    } else {
      this.props.setLanguageToEN();
    }
  };

  componentDidMount() {
    this.checkBrowserLanguage();
    this.checkDeviceScreenResolution();
    window.addEventListener('resize', this.checkDeviceScreenResolution);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkDeviceScreenResolution);
  }

  render() {
    return this.props.render({});
  }
}

export default connect(
  state => ({
    user: state.user,
    deviceScreen: state.deviceScreen,
  }),
  dispatch => ({
    login: user => dispatch(loginUser(user)),
    setLanguageToPL: () => dispatch(changeLanguageToPL()),
    setLanguageToEN: () => dispatch(changeLanguageToENG()),
    setScreenResolutionToMobile: () => dispatch(setScreenResolutionToMobile()),
    setScreenResolutionToDesktop: () => dispatch(setScreenResolutionToDesktop()),
  })
)(LayoutLogic);
