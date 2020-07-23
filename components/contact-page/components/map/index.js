import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, faCity } from '@fortawesome/free-solid-svg-icons';

import { Container, Info } from './map__styles';

const Map = () => {
  const language = useSelector(s => s.language.source.contactPage);

  return (
    <Container>
      <Info>
        <h1>{language.howToFind}</h1>
        <img src='/images/hub.png' height='120px' />
        <h2>Wrexham Enterprise Hub</h2>
        <div>
          <FontAwesomeIcon icon={faMapMarker} />
          <p>11-13 Rhosddu Rd</p>
        </div>
        <div>
          <FontAwesomeIcon icon={faCity} />
          <p>Wrexham LL11 1AT</p>
        </div>
      </Info>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2398.5358056977066!2d-2.9960464844243826!3d53.04667947991731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487ac71c6fc0f7e5%3A0x2566c64d45e46e7f!2sWrexham%20Enterprise%20Hub!5e0!3m2!1spl!2suk!4v1595410440383!5m2!1spl!2suk'
        width='100%'
        height='100%'
        frameborder='0'
        allowfullscreen=''
        aria-hidden='false'
        tabindex='0'
      ></iframe>
    </Container>
  );
};

export default Map;
