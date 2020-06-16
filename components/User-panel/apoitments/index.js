import React from 'react';

import Logic from './apoitments__logic';
import Presentation from './apointments__presentation';

export default () => <Logic render={props => <Presentation {...props} />} />;
