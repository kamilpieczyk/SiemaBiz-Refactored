import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import Icon from '@material/react-material-icon';

import { Container, Header, StageContainer, ErrMsg } from './change-password__styles';
import ChangePasswordLogicLayer from './change-password__logic';
import Breadcrumbs from '../../UI/breadcrumbs';
import Input from '../../UI/input';
import Separator from '../../UI/separator';
import DotedBreadcrumbs from '../../UI/dotted_breadcrumbs';
import Button from '../../UI/small-button';
import Loading from '../../UI/loading-circle';

import withClick from '../../HOC/withClick';

const ClickableButton = withClick(Button);

const ChangePasswordPresentationLayer = ({ state, inputHandle, handleSubmit }) => {
  const language = useSelector(s => s.language.source);

  return (
    <Container id='change-password'>
      <Breadcrumbs
        generalCrumb={language.userPanel.changePassword.title}
        breadcrumbs={[language.userPanel.title, language.userPanel.userSettings.title]}
      />
      <Separator height='20px' />

      {state.step === 1 && (
        <StageContainer>
          <Header>{language.userPanel.changePassword.stepOneHeader}</Header>
          <Separator height='20px' />
          <div>
            <Input
              label={language.userPanel.changePassword.oldPassword}
              value={state.oldPassword}
              onChange={e => inputHandle(e.target.value, 'oldPassword')}
              type='password'
            />

            {state.isLoading ? (
              <Button>
                <Loading />
              </Button>
            ) : (
              <ClickableButton onClickFunction={handleSubmit}>
                <Icon icon='arrow_forward_ios' />
              </ClickableButton>
            )}
          </div>

          {state.isErr && (
            <>
              <Separator height='20px' />
              <ErrMsg>{language.userPanel.changePassword.stepOneErr}</ErrMsg>
            </>
          )}
        </StageContainer>
      )}

      {state.step === 2 && (
        <StageContainer>
          <Header>{language.userPanel.changePassword.stepTwoHeader}</Header>
          <Separator height='20px' />
          <div>
            <Input
              label={language.userPanel.changePassword.newPassword}
              value={state.newPassword}
              onChange={e => inputHandle(e.target.value, 'newPassword')}
              type='password'
            />

            {state.isLoading ? (
              <Button>
                <Loading />
              </Button>
            ) : (
              <ClickableButton onClickFunction={handleSubmit}>
                <Icon icon='arrow_forward_ios' />
              </ClickableButton>
            )}
          </div>

          {state.isErr && (
            <>
              <Separator height='20px' />
              <ErrMsg>{language.userPanel.changePassword.stepTwoErrTitle}:</ErrMsg>
              <Separator height='10px' />
              {language.userPanel.changePassword.stepTwoErr.map((el, i) => (
                <ErrMsg key={i}>
                  <Icon icon='double_arrow' />
                  {el}
                </ErrMsg>
              ))}
            </>
          )}
        </StageContainer>
      )}

      {state.step === 3 && (
        <StageContainer>
          <Header>{language.userPanel.changePassword.stepThreeHeader}</Header>
          <Separator height='20px' />
          <div>
            <Input
              label={language.userPanel.changePassword.reNewPassword}
              value={state.reNewPassword}
              onChange={e => inputHandle(e.target.value, 'reNewPassword')}
              type='password'
            />

            {state.isLoading ? (
              <Button>
                <Loading />
              </Button>
            ) : (
              <ClickableButton onClickFunction={handleSubmit}>
                <Icon icon='arrow_forward_ios' />
              </ClickableButton>
            )}
          </div>

          {state.isErr && (
            <>
              <Separator height='20px' />
              <ErrMsg>{language.userPanel.changePassword.stepThreeErr}:</ErrMsg>
              <Separator height='10px' />
            </>
          )}
        </StageContainer>
      )}

      {state.step === 4 && (
        <StageContainer>
          <Header>{language.userPanel.changePassword.stepFourTitle}</Header>
        </StageContainer>
      )}

      <Separator height='30px' />
      <DotedBreadcrumbs numberOfSites={4} activeCrumb={state.step} />
    </Container>
  );
};

ChangePasswordLogicLayer.propTypes = {
  state: PropTypes.object.isRequired,
  inputHandle: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default ChangePasswordPresentationLayer;
