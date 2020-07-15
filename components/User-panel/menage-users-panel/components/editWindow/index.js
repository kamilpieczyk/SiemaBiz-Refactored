import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import { Container, Window, CloseContainer, Content, PrivContainer } from './edit-window__styles';
import Input from '../../../../UI/input';
import Separator from '../../../../UI/separator';
import Button from '../../../../UI/small-button';
import Loading from '../../../../UI/loading-circle';
import POST from '../../../../../API/post';
import ChooseField from '../../../../UI/choose-input';

const EditWindow = ({ user, close, refresh }) => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState(user.username);
  const [name, setName] = useState(user.name);
  const [surname, setSurname] = useState(user.surname);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [privileges, setPrivileges] = useState(0);

  const device = useSelector(s => s.deviceScreen);
  const language = useSelector(s => s.language.source.administrationPanel);
  const windowRef = useRef(null);
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const inputs = [
    {
      name: 'username',
      label: language.user,
      value: username,
      onChange: e => setUsername(e.target.value),
    },
    {
      name: 'name',
      label: language.name(user.username),
      value: name,
      onChange: e => setName(e.target.value),
    },
    {
      name: 'surname',
      label: language.surname(user.username),
      value: surname,
      onChange: e => setSurname(e.target.value),
    },
    {
      name: 'email',
      label: language.email(user.username),
      value: email,
      onChange: e => setEmail(e.target.value),
    },
    {
      name: 'phone',
      label: language.phone(user.username),
      value: phone,
      onChange: e => setPhone(e.target.value),
    },
  ];

  const privs = [
    {
      name: 225805,
      title: 'admin',
    },
    {
      name: 225804,
      title: 'moderator',
    },
    {
      name: 225803,
      title: 'redactor',
    },
    {
      name: 225801,
      title: 'user',
    },
  ];

  const translatePrivilege = priv => {
    priv = parseInt(priv, 10);
    switch (priv) {
      case 225805:
        return 0;
      case 225804:
        return 1;
      case 225803:
        return 2;
      case 225801:
        return 3;
    }
  };

  const closeFunction = () => {
    gsap.to(contentRef.current, {
      duration: 0.2,
      opacity: 0,
    });
    gsap.to(windowRef.current, {
      duration: 0.5,
      delay: 0.2,
      height: 0,
    });
    gsap
      .to(containerRef.current, {
        duration: 0.4,
        delay: 0.7,
        opacity: 0,
      })
      .then(() => close());
  };

  const handleUpdateUserDataButton = async () => {
    setLoading(true);
    const res = await POST('edit-user', {
      id: user._id,
      username,
      email,
      name,
      surname,
      phone,
      privilege: `${privs[privileges].name}`,
    });
    if (res.status === 'ok') {
      refresh();
      close();
    }
  };

  const chandleChooseField = (field, index) => {
    setPrivileges(index);
  };

  useEffect(() => {
    gsap.to(windowRef.current, {
      duration: 0.5,
      delay: 0.4,
      height: device === 'mobile' ? '90%' : 550,
    });
    gsap.to(containerRef.current, {
      duration: 0.4,
      opacity: 1,
    });
    gsap.to(contentRef.current, {
      duration: 0.2,
      delay: 1,
      opacity: 1,
    });
  }, []);

  useEffect(() => {
    const priv = translatePrivilege(user.privilege);
    setPrivileges(priv);
  }, []);

  return (
    <Container ref={containerRef}>
      <Window ref={windowRef}>
        <CloseContainer>
          <FontAwesomeIcon onClick={closeFunction} icon={faTimesCircle} size='2x' />
        </CloseContainer>
        <Content ref={contentRef}>
          <Input
            name={inputs[0].name}
            label={inputs[0].label}
            value={inputs[0].value}
            onChange={inputs[0].onChange}
          />
          <Separator height='10px' />
          <PrivContainer>
            <h3>{language.privileges}</h3>
            <ChooseField fields={privs} choosenFieldIndex={privileges} onChange={chandleChooseField} />
            <Separator height='20px' />
          </PrivContainer>
          {inputs.slice(1).map((input, index) => (
            <React.Fragment key={index}>
              <Input name={input.name} label={input.label} value={input.value} onChange={input.onChange} />
              <Separator height='10px' />
            </React.Fragment>
          ))}

          <Separator height='20px' />
          <Button click={handleUpdateUserDataButton} maxWidth>
            {loading ? <Loading text={language.loading} /> : language.button}
          </Button>
        </Content>
      </Window>
    </Container>
  );
};

export default EditWindow;
