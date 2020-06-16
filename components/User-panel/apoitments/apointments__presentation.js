import React from 'react';
import { useSelector } from 'react-redux';
import MaterialIcon from '@material/react-material-icon';

import { Container, Apoitment } from './apoitments__styles';
import { state, handlers } from './apoitments__types';
import { SectionContainer } from '../user-panel__styles';
import Breadcrumbs from '../../UI/breadcrumbs';
import Button from '../../UI/small-button';
import Separator from '../../UI/separator';
import NewApoitmentBox from './components/new-apoitment-box';

const Presentation = ({ state, handlers }) => {
  const language = useSelector(s => s.language.source.apoitmentsPanel);

  return (
    <Container>
      <SectionContainer>
        <Breadcrumbs generalCrumb={language.title} breadcrumbs={['admin panel']} />
      </SectionContainer>
      <Separator height='30px' />
      <Button id='add-new-apoitment-button' click={handlers.handleNewApoitmentWindowButton}>
        <MaterialIcon icon='playlist_add' />
        {language.addButton}
      </Button>
      {state.isAddNewApoitmentWindowActive && (
        <NewApoitmentBox
          isLoading={state.isApoitmentWindowLoading}
          callback={handlers.handleAddNewApoitment}
        />
      )}
      <Separator height='30px' />
      {console.log(state.apoitments)}
      {state.apoitments?.map(apoitment => (
        <Apoitment key={apoitment._id} available={apoitment.available}>
          <div>
            {new Date(apoitment.date).getDate()}.{new Date(apoitment.date).getMonth()}.
            {new Date(apoitment.date).getFullYear()}
          </div>
          <div>
            {language.booked}:{' '}
            {apoitment.available ? <MaterialIcon icon='close' /> : <MaterialIcon icon='check' />}
          </div>
        </Apoitment>
      ))}
    </Container>
  );
};

Presentation.propTypes = { state, handlers };
export default Presentation;
