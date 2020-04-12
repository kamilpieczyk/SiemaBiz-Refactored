import React, { PureComponent, createRef } from 'react'
import PropTypes from 'prop-types'
import Router from 'next/router'

class SearchBoxLogicLayer extends PureComponent {

  state = {
    searchValue: ''
  }

  static propTypes = {
    children: PropTypes.func.isRequired,
  }

  inputRef = createRef();

  handleSearch = () => {
    const value = this.inputRef.current.value;
    Router.push({
      pathname: '/companies-cathalogue',
      query: { search: value, site: 1 }
    })
  }

  render(){
    return this.props.children({
      state: this.state,
      handlers: {
        search: this.handleSearch,
      },
      inputRef: this.inputRef
    })
  }
}

export default SearchBoxLogicLayer;