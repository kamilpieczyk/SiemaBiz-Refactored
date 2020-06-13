import React from 'react';
import PropTypes, { bool } from 'prop-types';
import { useSelector } from 'react-redux';
import ReactMapGl from 'react-map-gl';
import MaterialIcon from '@material/react-material-icon';

import {
  Container,
  Map,
  LocationMark,
  Label,
  Content,
  Sidebar,
  CompanyContent,
  ButtonContainer,
  UserBox,
  UsersContainer,
} from './company-site__styles';
import key from '../../API/key';
import Loading from '../UI/loading-circle';
import { main } from '../../styles/colors';
import SidebarBox from '../UI/sidebar-box';
import { getIndustries } from '../../data/industries';
import Button from '../UI/small-button';
import witchClick from '../HOC/withClick';
import Separator from '../UI/separator';

const ClickableButton = witchClick(Button);

const CompanySitePresentation = ({
  company,
  state,
  handleButtonClick,
  handleUserBoxClick,
  handleWorkForThisCompanyButton,
  checkIfUserWorksForThisCompany,
  removeFromMyEmployersList,
}) => {
  const language = useSelector(s => s.language.source.companySite);
  const device = useSelector(s => s.deviceScreen);
  const user = useSelector(s => s.user.username);

  return (
    <React.Fragment>
      <Container isLoading={state.isLoading}>
        <Map>
          {state.isLoading ? (
            <Loading text={language.loading} color={main} />
          ) : (
            <React.Fragment>
              <LocationMark>
                <MaterialIcon icon='place' />
              </LocationMark>
              <Label>
                <img src={`${key}uploads/logos/${company.logo}`} width='290' />
                <div>
                  <strong>
                    <MaterialIcon icon='business_center' />
                    {language.company}:{' '}
                  </strong>
                  {company.name}
                </div>
                <div>
                  <strong>
                    <MaterialIcon icon='business' />
                    {language.industry}:{' '}
                  </strong>
                  {company.industry}
                </div>
                <div>
                  <strong>
                    <MaterialIcon icon='pin_drop' />
                    {language.adress}:{' '}
                  </strong>
                  {company.adress}
                </div>
                <div>
                  <strong>
                    <MaterialIcon icon='location_city' />
                    {language.city}:{' '}
                  </strong>
                  {company.city}
                </div>
                <div>
                  <strong>
                    <MaterialIcon icon='call' />
                    {language.phone}:{' '}
                  </strong>
                  {company.phone}
                </div>
                <div>
                  <strong>
                    <MaterialIcon icon='public' />
                    {language.website}:{' '}
                  </strong>
                  <a href={`https://www.${company.website}/`}>{company.website}</a>
                </div>
              </Label>
              {device === 'desktop' && (
                <ButtonContainer>
                  <ClickableButton thin onClickFunction={handleButtonClick}>
                    <MaterialIcon icon='expand_more' />
                    {language.button}
                  </ClickableButton>
                </ButtonContainer>
              )}
              <ReactMapGl
                mapboxApiAccessToken='pk.eyJ1IjoiZGVzdHJveWVycGwiLCJhIjoiY2s5NWhxNWZ0MDZvYzNxcjE4cGk1amZxMCJ9.FsivLf589VvIbpMjygY8AA'
                {...state.geo}
              />
            </React.Fragment>
          )}
        </Map>
      </Container>

      <Content>
        <CompanyContent>
          <h1>{company.name}</h1>
          <p>{company.description}</p>
          <h2>{language.owners}: </h2>
          <UsersContainer>
            {company.owners.map((owner, index) => (
              <UserBox key={owner + index} onClick={() => handleUserBoxClick(owner)}>
                {owner}
              </UserBox>
            ))}
          </UsersContainer>
          <h2>{language.employees}: </h2>
          <UsersContainer>
            {company.employees?.map((employee, index) => (
              <UserBox employee key={employee + index} onClick={() => handleUserBoxClick(employee)}>
                {employee}
                {employee === user && (
                  <>
                    <Separator width='15px' />
                    <MaterialIcon
                      icon='remove_circle'
                      title={language.deleteFromMyEmployers}
                      onClick={() => removeFromMyEmployersList(user, company._id)}
                    />
                  </>
                )}
              </UserBox>
            ))}
            {/* I WORK FOR THIS COMPANY BUTTON */}
            {user && !checkIfUserWorksForThisCompany(user) && (
              <ClickableButton thin onClickFunction={() => handleWorkForThisCompanyButton(company._id, user)}>
                <MaterialIcon icon='next_week' />
                <Separator width='5px' />
                {language.workForThisCompanyButton}
              </ClickableButton>
            )}
          </UsersContainer>
        </CompanyContent>
        <Sidebar>
          <SidebarBox light menu={getIndustries()} />
        </Sidebar>
      </Content>
    </React.Fragment>
  );
};

CompanySitePresentation.propTypes = {
  company: PropTypes.shape({
    owners: PropTypes.array.isRequired,
    employees: PropTypes.array.isRequired,
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired,
  }).isRequired,

  state: PropTypes.shape({
    geo: PropTypes.shape({
      width: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    isLoading: PropTypes.bool,
  }).isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  handleUserBoxClick: PropTypes.func.isRequired,
  handleWorkForThisCompanyButton: PropTypes.func.isRequired,
  removeFromMyEmployersList: PropTypes.func.isRequired,
  checkIfUserWorksForThisCompany: PropTypes.func.isRequired,
};

export default CompanySitePresentation;
