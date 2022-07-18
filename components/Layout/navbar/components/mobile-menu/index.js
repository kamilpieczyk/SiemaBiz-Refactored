import React from 'react';

import LogicLayer from './mobile-menu__logic';
import PresentationLayer from './mobile-menu__presentation';

export default () => <LogicLayer render={props => <PresentationLayer {...props} />} />;
