import React, { useState, useEffect } from 'react';

import { render } from './apointment-page__types';
import GET from '../../API/get';

const LogicLayer = ({ render }) => {
  const [appointmentsList, setAppointmentsList] = useState([]);

  const getAppointmentsListFromBackend = async () => {
    const data = await GET('get-apoitments');
    const array = [];
    for (let appointment of data) {
      appointment.date = new Date(appointment.date);
      if (appointment.available) array.push(appointment);
    }
    setAppointmentsList(array);
  };

  const handleBookAppointmentButton = (id, callback) => {
    callback(true);
  };

  useEffect(() => {
    getAppointmentsListFromBackend();
  }, []);

  return render({
    state: { appointmentsList },
    handlers: { handleBookAppointmentButton },
  });
};

LogicLayer.propTypes = { render };
export default LogicLayer;
