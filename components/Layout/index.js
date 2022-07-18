import React from 'react';

import Logic from './layout__logic';
import Presentation from './layout__presentation';

export default ({ children }) => (
  <Logic render={props => <Presentation {...props}>{children}</Presentation>} />
);
