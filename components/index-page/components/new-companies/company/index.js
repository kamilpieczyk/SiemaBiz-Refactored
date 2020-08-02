import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { Container } from './company__styles';
import { useLink } from '../../../../../API/link';

const Company = company => {
  const [isHover, setHover] = useState(false);

  company = company.company;
  const divRef = useRef(null);
  const imgRef = useRef(null);

  const link = useLink();

  const language = useSelector(state => state.language.source.indexPage);

  useEffect(() => {
    const div = divRef.current;
    const img = imgRef.current;
    if (isHover) {
      gsap.to(div, {
        right: 0,
        opacity: 1,
      });
      gsap.to(img, {
        x: -365,
        opacity: 0,
        duration: 0.5,
      });
    } else {
      gsap.to(div, {
        right: -365,
        opacity: 0,
      });
      gsap.to(img, {
        x: -0,
        opacity: 1,
        duration: 0.5,
      });
    }
  }, [isHover]);

  return (
    <Container
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={() => link({ pathname: '/company', query: { id: company._id } })}
    >
      <img src={`/uploads/logos/${company.logo}`} ref={imgRef} />
      <div ref={divRef}>
        <h2>{company.name}</h2>
        <h3>{company.city}</h3>
        <p>{company.adress}</p>
        <span>
          <p>{language.seeCompany}</p>
          <FontAwesomeIcon icon={faAngleRight} />
        </span>
      </div>
    </Container>
  );
};

export default Company;
