import React, { useCallback, useState, useRef, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faTag } from '@fortawesome/free-solid-svg-icons';
import gsap from 'gsap';

import { Container, Content, TitleContainer, Introduction } from './new-article__styles';
import { useLink } from '../../../../API/link';
import Button from '../../../UI/small-button';
import Separator from '../../../UI/separator';

const NewArticle = ({ article }) => {
  const [isIntroduction, setIntroduction] = useState(false);

  const link = useLink();
  const language = useSelector(s => s.language.source.indexPage);
  const device = useSelector(s => s.deviceScreen);

  const introductionNode = useRef(null);

  const getShortIntroduction = useMemo(() => {
    const arr = article.introduction.split(' ');
    const half = arr.length / 2;
    const newArr = arr.slice(0, half);
    const newInrto = newArr.join(' ');
    return newInrto;
  }, [article]);

  const handleReadArticle = useCallback(() => {
    link({ pathname: '/article', query: { id: article._id } });
  }, []);

  const handleIntroductionAnimation = () => {
    if (isIntroduction) {
      const tl = gsap.timeline({ repeat: 0, delay: 0.2 });
      tl.to(introductionNode.current, {
        opacity: 1,
        height: 'auto',
        duration: 0.7,
      });
    }
  };

  useEffect(handleIntroductionAnimation, [isIntroduction]);

  return (
    <Container>
      <Content
        background={`/uploads/images/${article.image}`}
        onMouseOver={() => setIntroduction(true)}
        onMouseLeave={() => setIntroduction(false)}
        isIntroduction={isIntroduction}
      >
        {isIntroduction && (
          <Introduction ref={introductionNode} onMouseOver={() => setIntroduction(true)}>
            {device === 'mobile' ? getShortIntroduction : article.introduction}
            <Separator height='30px' />
            <Button maxWidth click={handleReadArticle}>
              {language.read}
            </Button>
          </Introduction>
        )}
        <TitleContainer>
          <h2 onClick={handleReadArticle}>{article.title}</h2>
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
        </TitleContainer>
      </Content>
    </Container>
  );
};

export default NewArticle;
