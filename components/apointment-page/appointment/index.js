import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import MaterialIcon from '@material/react-material-icon';

import { appointment, handleBookAppointmentButton } from '../apointment-page__types';
import { Container, BookingButton } from './appointment__styles';

const Appointment = ({ appointment, callback }) => {
  const [isBooked, setBooked] = useState(false);

  const language = useSelector(s => s.language.source.appointmentsPage);

  let hours = '' + appointment.date.getHours();
  if (hours.length < 2) hours = hours + '0';
  let minutes = appointment.date.getMinutes() + '';
  if (minutes.length === 1) minutes = minutes + '0';
  let day = appointment.date.getDate() + '';
  if (day.length === 1) day = '0' + day;
  let month = appointment.date.getMonth() + '';
  if (month.length === 1) month = '0' + month;

  return (
    <Container>
      <div>
        <MaterialIcon icon='schedule' />
        {hours}:{minutes}
      </div>
      <div>
        <MaterialIcon icon='today' />
        {day}.{month}.{appointment.date.getFullYear()}
      </div>
      {isBooked ? (
        <BookingButton booked>{language.booked}</BookingButton>
      ) : (
        <BookingButton onClick={() => callback(appointment._id, setBooked)}>
          {language.bookingButton}
        </BookingButton>
      )}
    </Container>
  );
};

Appointment.propTypes = { appointment, callback: handleBookAppointmentButton };
export default Appointment;
