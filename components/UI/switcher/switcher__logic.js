import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SwitcherLogic = ({ render, text }) => {
  const [isSwitched, setSwitched] = useState(false);

  const handleSwitchOption = () => setSwitched(!isSwitched);

  return render({
    text,
    switch: handleSwitchOption,
    isSwitched,
  });
};

SwitcherLogic.propTypes = {
  render: PropTypes.func.isRequired,
};

export default SwitcherLogic;
