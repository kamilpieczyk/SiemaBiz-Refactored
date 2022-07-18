import React from 'react';
import LogicLayer from './deleteAccount__logic';
import PresentationLayer from './deleteAccount__presentation';

const DeleteAccount = props => <LogicLayer {...props} render={props => <PresentationLayer {...props} />} />;

export default DeleteAccount;
