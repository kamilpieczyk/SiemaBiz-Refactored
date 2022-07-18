import React from 'react';
import LogicLayer from './articles__logic';
import PresentationLayer from './articles__presentation';

const DeleteAccount = props => <LogicLayer {...props} render={props => <PresentationLayer {...props} />} />;

export default DeleteAccount;
