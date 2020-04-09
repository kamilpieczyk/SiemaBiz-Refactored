import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class SearchBoxLogicLayer extends PureComponent {

  state = {
    children: PropTypes.func.isRequired,
    
  }

  static propTypes = {

  }

  render(){
    return this.props.children({
      state: this.state,
    })
  }
}

export default SearchBoxLogicLayer;