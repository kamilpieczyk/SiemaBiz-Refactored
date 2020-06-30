import { useState, useEffect, useMemo } from 'react';

import { render } from './register__types';

const Logic = ({ render }) => {
  return render({
    state: {},
  });
};

Logic.propTypes = { render };
export default Logic;
