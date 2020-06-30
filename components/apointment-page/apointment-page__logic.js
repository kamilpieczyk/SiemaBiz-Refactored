import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { render } from './apointment-page__types';
import GET from '../../API/get';
import POST from '../../API/post';
import { setPopupWindowActive } from '../../Redux/actions';

const LogicLayer = ({ render }) => {
  const [appointmentsList, setAppointmentsList] = useState([]);
  const user = useSelector(s => s.user.username);
  const language = useSelector(s => s.language.source.appointmentsPage);

  const dispatch = useDispatch();

  const getAppointmentsListFromBackend = async () => {
    const data = await GET('get-apoitments');
    const array = [];
    for (let appointment of data) {
      appointment.date = new Date(appointment.date);
      if (appointment.available) array.push(appointment);
    }
    setAppointmentsList(array);
  };

  const handleBookAppointmentButton = async (id, callback) => {
    if (user) {
      const bookAnAppointment = await POST('book-an-appointment', { username: user, appointmentID: id });
      if (bookAnAppointment.status === 'ok') callback(true);
      else
        dispatch(
          setPopupWindowActive({
            title: language.faultPopup.title,
            messenge: language.faultPopup.msg,
          })
        );
      callback(true);
    } else {
      dispatch(
        setPopupWindowActive({
          title: language.notLoggedPopup.title,
          messenge: language.notLoggedPopup.msg,
        })
      );
    }
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
