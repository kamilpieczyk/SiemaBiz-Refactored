import React from 'react';

import Logic from './apointment-page__logic';
import Presentation from './apointment-page__presentation';

export default higherProps => <Logic render={props => <Presentation {...props} />} {...higherProps} />;
