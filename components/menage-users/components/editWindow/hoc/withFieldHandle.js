import React, { Component } from "react"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "../../../../../mapToProps"


export default ( WrappedComponent ) => {

  class HOC extends Component {
    
    language = this.props.language.actual

    list = ( toSend ) => {
      const eng = [
        "user",
        "company owner",
        "redactor",
        "moderator",
        "administrator"
      ]

      if( toSend ) return eng

      else{
        if( this.language === "pl" ) return [
          "użytkownik",
          "właściciel przedsiębiorstwa",
          "redaktor",
          "moderator",
          "administrator"
        ]
        else return eng
      }
    }

    handleChanging = optionIndex => {
      const choosenOption = this.list()[ optionIndex ]
      this.props.callback( choosenOption )
    }
  
    render(){
      return(
        <WrappedComponent 
          choosingFunction = {index => this.handleChanging( index )}
          list = {this.list()}
          choosenOption = { this.props.choosenOption }
          {...this.props} 
        />
      )
    }
  }

  return connect( mapStateToProps, mapDispatchToProps )( HOC )
}