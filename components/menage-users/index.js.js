import React from 'react';
import Logic from './logic';
import View from './view';

export default props => <Logic render={props => <View {...props} />} />;
