import { Component } from "react"
import router from 'next/router'
import { connect } from 'react-redux'

import getAuthorisation from "../../../API/authorisation"
import post from "../../../API/post"
import { logoutUser } from '../../../Redux/actions'

class DeleteAccountLogicLayer extends Component {

  state = {
    site: 1,
    password: "",
    isLoading: false,
    err: false
  }

  handlePasswordInput = ( value ) => {
    this.setState( {
      password: value
    } )
  }


  handleCheckPassword__SubbmitButton = async () => {
    
    this.setState( { isLoading: true, err: false } )
    const user = await getAuthorisation();
    const body = {
      username: user.username,
      password: this.state.password
    }
    const res = await post( 'check-password', body );

    if( res.status === "ok" ){
      this.setState( {
        isLoading: false,
        site: 2
      } )
    }
    else{
      this.setState( {
        isLoading: false,
        err: true
      } )
    }
  }

  handleConfirmDeletingAccount__SubmitButton = async () => {

    this.setState( { isLoading: true, err: false } )
    const user = await getAuthorisation();
    const body = { username: user.username };
    const deleteAccount = await post( "delete-user", body )

    if( deleteAccount.status === "ok" ){
      this.setState( { isLoading: false, err: false, site: 3 } );
      this.props.dispatch( logoutUser() );
      setTimeout( () => router.push( '/' ), 2000);
    }

  }

  getButtonFunction = () => {

    if( this.state.site === 1 ) return this.handleCheckPassword__SubbmitButton
    else if ( this.state.site === 2 ) return this.handleConfirmDeletingAccount__SubmitButton

  }

  render(){
    return this.props.render( {
      state: this.state,
      passwordInputController: this.handlePasswordInput,
      getButtonFunction: this.getButtonFunction,
    } )
  }
}

export default connect()( DeleteAccountLogicLayer )