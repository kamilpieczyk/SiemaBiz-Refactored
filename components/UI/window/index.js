import React, { useRef, useEffect } from 'react';
import MaterialIcon from '@material/react-material-icon';
import gsap from 'gsap';

import { Container, TopBar, ContentWindow } from './window__styles';

const Window = ({ close, width, height, children }) => {
  const containerRef = useRef(null);
  const windowRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.to(containerRef.current, {
      duration: 0.4,
      opacity: 1,
    })
      .to(windowRef.current, {
        duration: 0.6,
        height: 'auto',
        maxHeight: '80%',
      })
      .to(windowRef.current, {
        duration: 0.1,
        overflow: 'auto',
      });
  }, []);

  const handleCloseWindow = () => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.to(windowRef.current, {
      duration: 0.6,
      height: 0,
    })
      .to(containerRef.current, {
        duration: 0.4,
        opacity: 0,
      })
      .then(() => close());
  };

  return (
    <Container ref={containerRef}>
      <TopBar width={width}>
        <MaterialIcon icon='close' onClick={handleCloseWindow} />
      </TopBar>
      <ContentWindow width={width} height={height} ref={windowRef}>
        {children}
      </ContentWindow>
    </Container>
  );
};

export default Window;
