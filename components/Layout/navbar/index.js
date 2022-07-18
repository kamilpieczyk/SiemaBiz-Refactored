import React from 'react';

import Logic from './navbar__logic';
import Presentation from './navbar__presentation';

export default props => <Logic {...props} render={props => <Presentation {...props} />} />;
