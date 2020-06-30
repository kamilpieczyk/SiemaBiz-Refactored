import React from 'react';

import Logic from './register__logic';
import Presentation from './register__presentation';

const Register = () => <Logic render={props => <Presentation {...props} />} />;

export default Register;
