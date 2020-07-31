import React, { useCallback, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar, faTag } from '@fortawesome/free-solid-svg-icons';

import { Container, Content, TitleContainer, Introduction } from './new-article__styles';
import { useLink } from '../../../../API/link';
import Button from '../../../UI/small-button';
import Separator from '../../../UI/separator';

const NewArticle = ({ article }) => {
  const [isIntroduction, setIntroduction] = useState(false);

  const link = useLink();
  const language = useSelector(s => s.language.source.indexPage);

  const handleReadArticle = useCallback(() => {
    link({ pathname: '/article', query: { id: article._id } });
  }, []);

  return (
    <Container>
      <Content
        background={`/uploads/images/${article.image}`}
        onMouseOver={() => setIntroduction(true)}
        onMouseOut={() => setIntroduction(false)}
      >
        <Introduction visible={isIntroduction}>
          {article.introduction}
          <Separator height='30px' />
          <Button maxWidth click={handleReadArticle}>
            {language.read}
          </Button>
        </Introduction>
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
