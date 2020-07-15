import React, { useState } from "react"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "../../mapToProps"
import authorisation from "../getAuthorisation"
import * as Cookies from "js-cookie"
import url from "../fetchUrl"

class MenageUsers extends React.Component {

  state = {
    users: [],
    redirect: false,
    isEdit: null,
    isSearchActive: false,
    searchPhase: ""
  }

  checkPriv = async() => {
    // check user privileges and if user is not at least admin - log out
    const passport = Cookies.get( "token" )
    const { privileges } = await authorisation( passport )
    
    if( privileges < "225805" ){
      this.props.logout()
      this.setState( { redirect: true } )
    } 
  }

  getUserList = async() => {
    // GET COMPLETE USER LIST WITH ALL INFORMATIONS
    const data = await fetch( `${url}get-users-list` )
    const res = await data.json()
    if( res.users ) this.setState( { users: res.users } )
  }

  GetPrivileges = ( { privileges } ) => {
    // component whitch returns privileges name
    const [ priv, setPriv ] = useState( "" )
    fetch( `${url}get-privileges/${privileges}` )
      .then( res => res.json() )
      .then( res => setPriv( res.privileges ) )
    return <div>{priv}</div>
  }

  deleteUser = async ( userID, callback ) => {
    // DELETE USER AND UPDATE USER LIST

    const data = await fetch( `${url}delete-user`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( {
        userID
      } )
    } )
    const res = await data.json()

    if( res.status === "ok" ){
      callback( false )
      this.getUserList()
    }
  }

  handleEdit = username => {
    // handler for user editing.
    // if username exist func. works as driver for buttons

    if( username ){
      if( this.state.isEdit ) this.setState( { isEdit: null } )
      else this.setState( { isEdit: username } )
    }
  }

  setSearchPhase = phase => {
    this.setState( {
      searchPhase: phase
    } )
  }

  componentDidMount(){
    this.getUserList()
    this.checkPriv()
  }

  render(){
    return this.props.render( {
      state: this.state,
      device: this.props.device.width,
      GetPrivileges: this.GetPrivileges,
      deleteUser: this.deleteUser,
      editUser: this.handleEdit,
      getUserList: this.getUserList,
      setSearchPhase: this.setSearchPhase
    } )
  }
}

export default connect(  mapStateToProps,  mapDispatchToProps )( MenageUsers )