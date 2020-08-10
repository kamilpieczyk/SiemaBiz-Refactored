import React from 'react';
import crypto from 'crypto-js';
import { useSelector } from 'react-redux';
// import printjs from 'print-js';
import styled from 'styled-components';

import POST from '../API/post';
import {
  CvSectionsContainer,
  CvSection,
  CvSectionItem,
  CvSectionItemSmall,
  NavButtonsContainer,
} from '../components/User-panel/company-managment/components/cv-window/cv-window__styles';
import Button from '../components/UI/small-button';
import withClick from '../components/HOC/withClick';
import { main, black } from '../styles/colors';
import Separator from '../components/UI/separator';

const CButton = withClick(Button);

const MainInfo = styled.section`
  text-align: left;
  margin: 0 10%;
  h1 {
    font-size: 4rem;
  }
`;

const ButtonContainer = styled.div`
  position: fixed;
  top: 30px;
  left: 30px;
`;

const PrintCv = ({ cv }) => {
  const language = useSelector(s => s.language.source.companyPanel.cvWindow);
  return (
    <React.Fragment>
      <ButtonContainer>
        <CButton
          onClickFunction={() => require('print-js')({ printable: 'print-cv', type: 'html', header: 'CV' })}
        >
          {language.print}
        </CButton>
      </ButtonContainer>

      <div id='print-cv'>
        <MainInfo>
          <div>
            <h1>
              {cv.name} {cv.surname}
            </h1>
          </div>
          <section>
            <p>
              <strong>{language.dateOfBirdth}: </strong>
              {cv.dateOfBirdth}
            </p>
            <p>
              <strong>{language.city}: </strong>
              {cv.city}
            </p>
            <p>
              <strong>{language.phone}: </strong>
              {cv.phone}
            </p>
            <p>
              <strong>{language.email}: </strong>
              {cv.email}
            </p>
          </section>
        </MainInfo>

        <CvSectionsContainer>
          <CvSection>
            <h1>{language.experience}</h1>
            <CvSectionItem grey>
              <h2>
                <strong>{language.company}</strong>
              </h2>
              <h2>
                <strong>{language.years}</strong>
              </h2>
              <h2>
                <strong>{language.role}</strong>
              </h2>
            </CvSectionItem>
            <Separator height='20px' />
            {cv.workplaces?.map((workplace, index) => (
              <CvSectionItem key={index}>
                <p>{workplace.employerName}</p>
                <p>
                  {workplace.startYear} - {workplace.endYear}
                </p>
                <p>{workplace.role}</p>
              </CvSectionItem>
            ))}
          </CvSection>

          <CvSection>
            <h1>
              {/* <MaterialIcon icon = 'school' /> */}
              {language.education}
            </h1>
            <CvSectionItem grey>
              <h2>
                <strong>{language.schoolName}</strong>
              </h2>
              <h2>
                <strong>{language.years}</strong>
              </h2>
              <h2>
                <strong>{language.graduation}</strong>
              </h2>
            </CvSectionItem>
            <Separator height='20px' />
            {cv.education?.map((school, index) => (
              <CvSectionItem key={index}>
                <p>{school.schoolName}</p>
                <p>
                  {school.startYear} - {school.endYear}
                </p>
                <p>{school.graduatedTitle}</p>
              </CvSectionItem>
            ))}
          </CvSection>

          <CvSection>
            <h1>
              {/* <MaterialIcon icon = 'list_alt' /> */}
              {language.certificates}
            </h1>
            {cv.certificates?.map((cert, index) => (
              <CvSectionItemSmall key={index}>{cert.certName}</CvSectionItemSmall>
            ))}
          </CvSection>

          <CvSection>
            <h1>
              {/* <MaterialIcon icon = 'settings' /> */}
              {language.skills}
            </h1>
            {cv.skills?.map((skill, index) => (
              <CvSectionItemSmall key={index}>{skill.skill}</CvSectionItemSmall>
            ))}
          </CvSection>

          <CvSection>
            <h1>
              {/* <MaterialIcon icon = 'sports_football' /> */}
              {language.hobbies}
            </h1>
            {cv.hobbies?.map((hobby, index) => (
              <CvSectionItemSmall key={index}>{hobby.hobby}</CvSectionItemSmall>
            ))}
          </CvSection>
        </CvSectionsContainer>
      </div>
    </React.Fragment>
  );
};

PrintCv.getInitialProps = async ctx => {
  const hash = crypto.AES.decrypt(ctx.query.cv, 'siemaBizHash247');
  const cv = hash.toString(crypto.enc.Utf8);
  const getCv = await POST('get-cv', {
    username: cv,
  });

  return { cv: getCv.data };
};

export default PrintCv;
