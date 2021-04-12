import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Icon from '@material/react-material-icon';

import {
  Container,
  Username,
  DetailsContainer,
  Label,
  Information,
  Edit,
  InformationUnderEditing,
} from './profile-settings__styles';
import Breadcrumbs from '../../UI/breadcrumbs';
import Separator from '../../UI/separator';
import Button from '../../UI/small-button';
import Loading from '../../UI/loading-circle';
import { main } from '../../../styles/colors';

import withClick from '../../HOC/withClick';

const SubmitButton = withClick(Button);

const ProfileSettingsPresentationLayer = ({
  breadcrumbs,
  InformationsArray,
  activeInputRef,
  handleFocusOnInput,
  handleSubmitInformations,
  isLoading,
}) => {
  const language = useSelector(s => s.language.source);
  const user = useSelector(s => s.user);
  const device = useSelector(s => s.deviceScreen);

  return (
    <Container>
      <Breadcrumbs generalCrumb={language.userPanel.userSettings.title} breadcrumbs={breadcrumbs} />
      <Separator height='50px' />
      <Username>
        <Icon icon='person_pin' />
        <Separator width='10px' />
        <p>{user.username}</p>
      </Username>
      <Separator height='30px' />

      <DetailsContainer>
        {InformationsArray.map((element, index) => (
          <React.Fragment key={index}>
            <div>
              <Label>{device === 'mobile' ? <Icon icon={element.icon} /> : element.title + ':'}</Label>
              {element.changingState ? (
                <InformationUnderEditing
                  value={element.value}
                  onChange={element.onChangeFunction}
                  placeholder={element.title}
                  onBlur={element.editFunction}
                  ref={activeInputRef}
                />
              ) : (
                <React.Fragment>
                  <Information>{element.value || element.information}</Information>
                  <Edit
                    onClick={e => {
                      element.editFunction(e);
                      setTimeout(handleFocusOnInput, 100);
                    }}
                  >
                    <Icon icon='edit' />
                  </Edit>
                </React.Fragment>
              )}
            </div>
            <Separator height='15px' />
          </React.Fragment>
        ))}
      </DetailsContainer>

      {isLoading ? (
        <Loading color={main} text={language.userPanel.userSettings.loading} />
      ) : (
        <SubmitButton maxWidth onClickFunction={handleSubmitInformations}>
          <Icon icon='check_box' />
          <Separator width='10px' />
          <p style={{ textTransform: 'uppercase' }}>{language.userPanel.userSettings.button}</p>
        </SubmitButton>
      )}
    </Container>
  );
};

ProfileSettingsPresentationLayer.propTypes = {
  breadcrumbs: PropTypes.array.isRequired,
  InformationsArray: PropTypes.array,
  activeInputRef: PropTypes.object,
  handleFocusOnInput: PropTypes.func,
  handleSubmitInformations: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
};

export default ProfileSettingsPresentationLayer;
