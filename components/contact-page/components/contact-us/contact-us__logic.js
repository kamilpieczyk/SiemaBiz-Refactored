import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { render } from '../../@types';
import POST from '../../../../API/post';
import { setPopupWindowActive } from '../../../../Redux/actions';

const Logic = ({ render }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [msg, setMsg] = useState('');
  const [isLoading, setLoading] = useState(false);

  const language = useSelector(s => s.language.source.contactPage);
  const dispatch = useDispatch();

  const inputs = [
    {
      name: 'name',
      type: 'text',
      label: language.name,
      value: name,
      onChange: e => setName(e.target.value),
    },
    {
      name: 'email',
      type: 'text',
      label: language.email,
      value: email,
      onChange: e => setEmail(e.target.value),
    },
    {
      name: 'phone',
      type: 'number',
      label: language.phone,
      value: phone,
      onChange: e => setPhone(e.target.value),
    },
    {
      name: 'msg',
      type: 'textarea',
      label: language.msg,
      value: msg,
      onChange: e => setMsg(e.target.value),
    },
  ];

  const handleSendEmail = useCallback(async ({ name, email, phone, msg }) => {
    setLoading(true);
    const data = await POST('send-contact-email', { name, email, phone, msg });
    if (data.status === 'ok') {
      dispatch(
        setPopupWindowActive({
          title: language.popup.title,
          messenge: language.popup.msg,
        })
      );
      setLoading(false);
    }
  }, []);

  return render({ state: { name, email, phone, msg }, inputs, handleSendEmail, isLoading });
};

Logic.propTypes = { render };
export default Logic;
