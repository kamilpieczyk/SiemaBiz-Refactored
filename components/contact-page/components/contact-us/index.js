import React from 'react';

import Logic from './contact-us__logic';
import Presentation from './contact-us__presentation';

const ContactUs = Hprops => <Logic {...Hprops} render={props => <Presentation {...props} />} />;

export default ContactUs;
