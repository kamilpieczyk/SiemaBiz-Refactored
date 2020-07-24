import React from 'react';

import Logic from './contact-page__logic';
import Presentation from './contact-page__presentation';

const ContactPage = Hprops => (
  <Logic {...Hprops} render={props => <Presentation {...props} team={Hprops.team} />} />
);

export default ContactPage;
