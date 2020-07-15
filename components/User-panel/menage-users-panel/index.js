import React from 'react';

import Logic from './menage-users-panel__Logic';
import Presentation from './menage-users-panel__presentation';

const MenageUsersPanel = props => <Logic {...props} render={props => <Presentation {...props} />} />;

export default MenageUsersPanel;
