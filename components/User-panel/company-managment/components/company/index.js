import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import apiKey from '../../../../../API/key';
import Button from '../../../../UI/small-button';
import Loading from '../../../../UI/loading-circle';
import withClick from '../../../../HOC/withClick';
import { main } from '../../../../../styles/colors';

import { Container, ActionContainer, Action, IconsContainer } from './company__styles';
import MaterialIcon from '@material/react-material-icon';
import Separator from '../../../../UI/separator';

const ClickButton = withClick(Button);

const Company = ({ name, logo, city, id, owners, employees, handlers, isLoading }) => {
  const [isDeleting, setDeleting] = useState(false);
  const language = useSelector(s => s.language.source.companyPanel);
  const actions = [
    {
      title: language.manageEmployeeButton,
      icon: 'people',
      onClick: () => handlers.handleEmployeeListButton(owners, employees, name),
    },
    {
      title: language.manageJobAds,
      icon: 'group_add',
      onClick: () => handlers.handleManageJobAdsButton(id),
    },
    {
      title: language.manageCooperationAds,
      icon: 'work',
      onClick: () => handlers.handleManageCoopOffersButton({ companyID: id }),
    },
  ];

  return (
    <Container>
      {isDeleting ? (
        isLoading.deleteCompany ? (
          <Loading text={language.deletingCompany} color={main} />
        ) : (
          <React.Fragment>
            <div>{language.deleteCompanyQuestion(name)}</div>
            <section>
              <ClickButton onClickFunction={() => handlers.handleDeleteCompanyButton(id, logo)}>
                {language.deleteCompany}
              </ClickButton>
              <Separator width='10px' />
              <ClickButton onClickFunction={() => setDeleting(false)}>{language.cancel}</ClickButton>
            </section>
          </React.Fragment>
        )
      ) : (
        <React.Fragment>
          <img src={`${apiKey}uploads/logos/${logo}`} width='100' max-height='100%' title={name} />
          <div>{name}</div>
          <div>{city}</div>

          <ActionContainer>
            {actions.map(element => (
              <Action key={element.title} onClick={element.onClick} title={element.title}>
                <MaterialIcon icon={element.icon} />
                <p>{element.title}</p>
              </Action>
            ))}
          </ActionContainer>

          <IconsContainer>
            <MaterialIcon
              title={language.editCompany}
              icon='edit'
              onClick={() => handlers.handleAddNewCompanyButton(false, true, id)}
            />
            <MaterialIcon
              title={language.deleteCompany}
              icon='delete_forever'
              onClick={() => setDeleting(true)}
            />
          </IconsContainer>
        </React.Fragment>
      )}
    </Container>
  );
};

Company.propTypes = {
  name: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  owners: PropTypes.array.isRequired,
  employees: PropTypes.array.isRequired,
  isLoading: PropTypes.shape({
    deleteCompany: PropTypes.bool,
  }),
  handlers: PropTypes.shape({
    handleEmployeeListButton: PropTypes.func.isRequired,
    handleManageJobAdsButton: PropTypes.func.isRequired,
    handleAddNewCompanyButton: PropTypes.func.isRequired,
    handleManageCoopOffersButton: PropTypes.func.isRequired,
  }).isRequired,
};

export default Company;
