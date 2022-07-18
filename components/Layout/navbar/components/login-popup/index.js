import React from 'react';

import Present from './login-popup__presentation';
import Logic from './login-popup__logic';

export default ({ close }) => <Logic close={close} render={props => <Present {...props} />} />;
