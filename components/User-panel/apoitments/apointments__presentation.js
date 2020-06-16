import React from 'react';
import { useSelector } from 'react-redux';
import MaterialIcon from '@material/react-material-icon';
import UseAnimations from 'react-useanimations';

import { Container, Apoitment } from './apoitments__styles';
import { state, handlers } from './apoitments__types';
import { SectionContainer } from '../user-panel__styles';
import Breadcrumbs from '../../UI/breadcrumbs';
import Button from '../../UI/small-button';
import Separator from '../../UI/separator';
import NewApoitmentBox from './components/new-apoitment-box';

const Presentation = ({ state, handlers }) => {
  const language = useSelector(s => s.language.source.apoitmentsPanel);
  const device = useSelector(s => s.deviceScreen);

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
      {state.apoitments?.map(apoitment => {
        const date = new Date(apoitment.date);
        const day = date.getDate() + '';
        const month = date.getMonth() + '';
        const hours = date.getHours() + '';
        const minutes = date.getMinutes() + '';

        return (
          <Apoitment key={apoitment._id} available={apoitment.available}>
            <div>
              <MaterialIcon icon='schedule' />
              {hours.length === 2 ? hours : '0' + hours}:{minutes.length === 2 ? minutes : '0' + minutes}
            </div>
            <div>
              <MaterialIcon icon='event_available' />
              {day.length === 2 ? day : '0' + day}.{month.length === 2 ? month : '0' + month}.
              {new Date(apoitment.date).getFullYear()}
            </div>
            <div>
              {apoitment.available ? (
                <MaterialIcon icon='close' title={language.notBooked} />
              ) : (
                <MaterialIcon icon='check' title={language.booked} />
              )}
            </div>
            {apoitment.bookedBy ? (
              <>
                <div>
                  <MaterialIcon icon='person' title={language.bookedBy} />
                  {apoitment.bookedBy}
                </div>
                <div>
                  <MaterialIcon icon='event' title={language.bookedAt} />
                  <div>
                    {new Date(apoitment.bookedAt).getDate()}.{new Date(apoitment.bookedAt).getMonth()}.
                    {new Date(apoitment.bookedAt).getFullYear()}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div />
                <div />
              </>
            )}
            <section>
              <UseAnimations
                animationKey={state.isApoitmentDeleting ? 'loading' : 'trash'}
                onClick={() => handlers.handleDeleteApoitment(apoitment._id)}
                title={language.delete}
              />
            </section>
          </Apoitment>
        );
      })}
    </Container>
  );
};

Presentation.propTypes = { state, handlers };
export default Presentation;
