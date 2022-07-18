import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import MaterialIcon from '@material/react-material-icon';

import { ContentFrame, Header, ErrorMessage } from './deleteAccount__styles';
import Input from '../../UI/input';
import Button from '../../UI/small-button';
import DottedBreadcrumbs from '../../UI/dotted_breadcrumbs';
import Loading from '../../UI/loading-circle';
import { SectionContainer } from '../user-panel__styles';
import Separator from '../../UI/separator';
import Breadcrumbs from '../../UI/breadcrumbs';

import withClick from '../../HOC/withClick';

const Submit = withClick(Button);

const DeleteAccountPresentationLayer = ({ state, ...props }) => {
  const language = useSelector(s => s.language.source);

  return (
    <SectionContainer id='delete-account'>
      <Breadcrumbs
        generalCrumb={language.userPanel.deleteAccount.title}
        breadcrumbs={[language.userPanel.title, language.userPanel.userSettings.title]}
      />
      <ContentFrame>
        <Header>
          {state.site === 1 && language.userPanel.deleteAccount.stepOneTitle}
          {state.site === 2 && language.userPanel.deleteAccount.stepTwoTitle}
          {state.site === 3 && language.userPanel.deleteAccount.stepThreeTitle}
        </Header>
        <Separator height='20px' />
        {state.site === 1 && (
          <Input
            type='password'
            name='password'
            label={language.userPanel.deleteAccount.password}
            value={state.password}
            onChange={e => props.passwordInputController(e.target.value)}
          />
        )}
        <Separator height='20px' />
        {state.err && (
          <>
            <Separator height='20px' />
            <ErrorMessage>
              <MaterialIcon icon='error' />
              {language.userPanel.deleteAccount.error}
            </ErrorMessage>
            <Separator height='20px' />
          </>
        )}
        {state.isLoading ? (
          <Button maxWidth>
            <Loading text={language.userPanel.deleteAccount.loading} />
          </Button>
        ) : (
          <Submit maxWidth onClickFunction={props.getButtonFunction()}>
            {language.userPanel.deleteAccount.button}
          </Submit>
        )}

        <DottedBreadcrumbs numberOfSites='3' activeCrumb={state.site} />
      </ContentFrame>
    </SectionContainer>
  );
};

export default DeleteAccountPresentationLayer;
