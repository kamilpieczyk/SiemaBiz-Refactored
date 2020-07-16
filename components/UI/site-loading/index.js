import React from 'react';
import { useSelector } from 'react-redux';

import { Container, LoadingContainer } from './site-loading__styles';
import { main } from '../../../styles/colors';
import Loading from '../loading-circle';

const SiteLoading = () => {
  const loadingText = useSelector(s => s.language.source.general.siteLoading);

  return (
    <Container>
      <LoadingContainer>
        <Loading color={main} text={loadingText} />
      </LoadingContainer>
    </Container>
  );
};

export default SiteLoading;
