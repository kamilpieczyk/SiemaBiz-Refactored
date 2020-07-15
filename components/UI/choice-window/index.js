import React, { useEffect, useRef } from 'react';
import Icon from '@material/react-material-icon';
import { useSelector, useDispatch } from 'react-redux';
import gsap from 'gsap';

import { Container, Popup, TopBar, Content } from './choice-window__styles';
import Separator from '../separator';
import Button from '../small-button';
import withClick from '../../HOC/withClick';
import { setChoiceWindowInactive } from '../../../Redux/actions';

const ClickableButton = withClick(Button);

export default () => {
  const { question, yesFunction } = useSelector(s => s.choiceWindow);
  const language = useSelector(s => s.language.source);
  const dispatch = useDispatch();

  const containerRef = useRef(null);
  const windowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.to(containerRef.current, {
      duration: 0.5,
      opacity: 1,
    }).to(windowRef.current, {
      duration: 0.4,
      height: 'auto',
    });
  }, []);

  const handleCloseWindow = yes => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.to(windowRef.current, {
      duration: 0.4,
      height: 0,
    })
      .to(containerRef.current, {
        duration: 0.5,
        opacity: 0,
      })
      .then(() => {
        if (yes) yesFunction();
        else dispatch(setChoiceWindowInactive());
      });
  };

  return (
    <Container ref={containerRef}>
      <Popup ref={windowRef}>
        <TopBar>
          <Icon icon='report' />
          <Separator width='10px' />
          <p>{question}</p>
        </TopBar>
        <Content>
          <ClickableButton onClickFunction={() => handleCloseWindow(true)}>
            {language.general.yes}
          </ClickableButton>
          <Separator width='10px' />
          <ClickableButton onClickFunction={() => handleCloseWindow(false)}>
            {language.general.no}
          </ClickableButton>
        </Content>
      </Popup>
    </Container>
  );
};
