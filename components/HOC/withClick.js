import React from 'react';
import PropTypes from 'prop-types';

export default Component => {
  const ClicableButton = ({ onClickFunction, children, ...restProps }) => {
    return (
      <div onClick={onClickFunction}>
        <Component {...restProps}>{children}</Component>
      </div>
    );
  };

  ClicableButton.propTypes = {
    onClickFunction: PropTypes.func.isRequired,
    thin: PropTypes.bool,
  };

  return ClicableButton;
};
