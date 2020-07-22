import React from 'react';

import Logic from './contact-page__logic';
import Presentation from './contact-page__presentation';

const ContactPage = props => <Logic {...props} render={props => <Presentation {...props} />} />;

export default ContactPage;
