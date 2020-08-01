import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faTag, faEye } from '@fortawesome/free-solid-svg-icons';

import { Container, TitleBox, ButtonBox } from './latest-article-box__styles';
import { useLink } from '../../../../../API/link';
import Button from '../../../../UI/small-button';
import Separator from '../../../../UI/separator';

const LatestArticleBox = ({ article }) => {
  const [isBlur, setBlur] = useState(false);

  const link = useLink();
  const buttonRef = useRef(null);
  const language = useSelector(s => s.language.source.indexPage);

  const handleReadArticle = useCallback(() => {
    link({ pathname: '/article', query: { id: article._id } });
  }, []);

  useEffect(() => {
    if (isBlur) {
      const tl = gsap.timeline({ repeat: 0, delay: 0.4 });
      tl.to(buttonRef.current, {
        opacity: 1,
        duration: 1,
      });
    }
  }, [isBlur]);

  return (
    <Container
      image={`/uploads/images/${article.image}`}
      onMouseOver={() => setBlur(true)}
      onMouseLeave={() => setBlur(false)}
      isBlur={isBlur}
      onClick={handleReadArticle}
    >
      <TitleBox>
        <h2>{article.title}</h2>
        <div>
          <div>
            <FontAwesomeIcon icon={faUser} />
            <p>{article.author}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCalendar} />
            <p>{article.date}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faTag} />
            <p>{article.category}</p>
          </div>
        </div>
      </TitleBox>
      {isBlur && (
        <ButtonBox ref={buttonRef}>
          <Button>
            <FontAwesomeIcon icon={faEye} />
            <Separator width='10px' />
            {language.read}
          </Button>
        </ButtonBox>
      )}
    </Container>
  );
};

LatestArticleBox.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    introduction: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }),
};

export default LatestArticleBox;
