import React from 'react';
import { useSelector } from 'react-redux';

import Navbar from './navbar';
import { Container } from './layaut__style';
import Popup from '../UI/popup-window';
import ChoiceWindow from '../UI/choice-window';
import Footer from './footer';
import GlobalLoading from '../UI/site-loading';

export default ({ children }) => {
  const isPopupActive = useSelector(s => s.popup.isActive);
  const isChoiceWindowActive = useSelector(s => s.choiceWindow.active);
  const isGlobalLoading = useSelector(s => s.globalLoading);

  return (
    <Container>
      <Navbar />
      {isPopupActive && <Popup />}
      {isChoiceWindowActive && <ChoiceWindow />}
      {isGlobalLoading && <GlobalLoading />}
      {children}
      <Footer />
    </Container>
  );
};
