import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import MaterialIcon from '@material/react-material-icon';

import { callback, loading } from '../../apoitments__types';
import { Container } from './new-apoitment-box__styles';
import Button from '../../../../UI/small-button';
import Separator from '../../../../UI/separator';
import Loading from '../../../../UI/loading-circle';

const NewApoitmentBox = ({ callback, isLoading }) => {
  const [date, setDate] = useState(null);
  const [buttonPositionY, setButtonPositionY] = useState(null);
  const language = useSelector(s => s.language.source.apoitmentsPanel);

  useEffect(() => {
    const button = document.getElementById('add-new-apoitment-button');
    const offsetY = button.offsetTop;
    setButtonPositionY(offsetY);
  }, []);

  return (
    <Container position={buttonPositionY}>
      <DatePicker
        placeholderText={language.dateInputPlaceholder}
        selected={date}
        onChange={date => setDate(date)}
        showTimeSelect
        timeFormat='HH:mm'
        timeIntervals={30}
        timeCaption='time'
        dateFormat='MMMM d, yyyy h:mm aa'
        className='date-picker-input'
        minDate={new Date()}
      />
      <Separator width='20px' />
      {isLoading ? (
        <Button>
          <Loading size={10} />
        </Button>
      ) : (
        <Button click={() => callback(date)}>
          <MaterialIcon icon='add_circle' />
        </Button>
      )}
    </Container>
  );
};

NewApoitmentBox.propTypes = { callback, isLoading: loading };
export default NewApoitmentBox;
