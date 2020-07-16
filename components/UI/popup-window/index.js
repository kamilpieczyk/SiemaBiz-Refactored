import React, { useRef, useEffect } from 'react';
import Icon from '@material/react-material-icon';
import { useSelector, useDispatch } from 'react-redux';
import gsap from 'gsap';

import { Container, Popup, TopBar, Content } from './popup-window__styles';
import Separator from '../separator';
import Button from '../small-button';
import withClick from '../../HOC/withClick';
import { setPopupWindowInactive } from '../../../Redux/actions';

const ClickableButton = withClick(Button);

export default () => {
  const { title, messenge } = useSelector(s => s.popup);
  const dispatch = useDispatch();

  const containerRef = useRef(null);
  const windowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.to(containerRef.current, {
      duration: 0.4,
      opacity: 1,
    }).to(windowRef.current, {
      duration: 0.5,
      height: 'auto',
    });
  }, []);

  const handleOkButton = () => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.to(windowRef.current, {
      duration: 0.5,
      height: 0,
    })
      .to(containerRef.current, {
        duration: 0.4,
        opacity: 0,
      })
      .then(() => dispatch(setPopupWindowInactive()));
  };

  return (
    <Container ref={containerRef}>
      <Popup ref={windowRef}>
        <TopBar>
          <Icon icon='report' />
          <Separator width='10px' />
          <p>{title}</p>
        </TopBar>
        <Content>
          {messenge}
          <Separator height='20px' />
          <ClickableButton onClickFunction={handleOkButton}>ok</ClickableButton>
        </Content>
      </Popup>
    </Container>
  );
};
