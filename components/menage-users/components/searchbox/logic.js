import { Component } from "react"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "../../../../mapToProps"

class SearchBoxContainer extends Component {

  state = {}

  handleInput = ( value ) => {
    // HANDLER FOR SEARCH INPUT
    
    this.props.action( value )
  }

  render(){
    return this.props.render( {
      language: this.props.language.actual,
      state: this.state,
      handleInput: this.handleInput,
    } )
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( SearchBoxContainer )