import React from 'react';

import LogicLayer from './user-menu__logic';
import PresentationLayer from './user-menu__presentation';

const UserMenu = () => <LogicLayer render={props => <PresentationLayer {...props} />} />;

export default UserMenu;
