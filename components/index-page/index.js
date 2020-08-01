import React from 'react';
import PropTypes from 'prop-types';

import LogicLayer from './index-page__logic';
import PresentationLayer from './index-page__presentation';

const IndexPage = props => (
  <LogicLayer>{newProps => <PresentationLayer {...newProps} articles={props.articles} />}</LogicLayer>
);

export default IndexPage;
