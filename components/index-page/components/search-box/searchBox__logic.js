import React, { PureComponent, createRef } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';

class SearchBoxLogicLayer extends PureComponent {
  state = {
    searchValue: '',
    backgroundOpacity: 1,
    backgroundPositionMovement: 0,
  };

  static propTypes = {
    children: PropTypes.func.isRequired,
  };

  inputRef = createRef();

  handleSearch = () => {
    const value = this.inputRef.current.value;
    Router.push({
      pathname: '/companies-cathalogue',
      query: { search: value, site: 1 },
    });
  };

  handleScrollValue = () => {
    const screenH = window.innerHeight;
    let opacity = 1;
    if (window.scrollY <= screenH) {
      opacity = 1 - (100 * window.scrollY) / screenH / 100;
    } else {
      opacity = 0;
    }
    this.setState({ backgroundOpacity: opacity, backgroundPositionMovement: window.scrollY });
  };

  componentDidMount() {
    this.handleScrollValue();
    document.addEventListener('scroll', this.handleScrollValue);
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScrollValue);
  }

  render() {
    return this.props.children({
      state: this.state,
      handlers: {
        search: this.handleSearch,
      },
      inputRef: this.inputRef,
    });
  }
}

export default SearchBoxLogicLayer;
