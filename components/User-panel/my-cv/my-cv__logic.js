import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useState, useRef, useEffect } from 'react';

import auth from '../../../API/authorisation';
import POST from '../../../API/post';
import { setPopupWindowActive } from '../../../Redux/actions';

const MyCvLogicLayer = ({ render }) => {
  const [username, setUsername] = useState(null);
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [dateOfBirdth, setDateOfBirdth] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [education, setEducation] = useState(null);
  const [workplaces, setWorkplaces] = useState(null);
  const [certificates, setCertificats] = useState([]);
  const [skills, setSkills] = useState([]);
  const [hobbies, setHobbies] = useState([]);
  const [isSending, setSending] = useState(false);

  const language = useSelector(s => s.language.source);
  const user = useSelector(s => s.user.username);
  const breadcrumbs = [language.userPanel.title, language.userPanel.userSettings.title];
  const dispatch = useDispatch();

  const getUserCvDetails = async () => {
    try {
      const username = user.username;
      const myCvDetailsObject = await POST('get-cv', { username });

      const {
        name,
        surname,
        dateOfBirdth,
        email,
        phone,
        city,
        education,
        workplaces,
        certificates,
        skills,
        hobbies,
      } = myCvDetailsObject.data;

      console.log(myCvDetailsObject.data);

      setName(name);
      setSurname(surname);
      setDateOfBirdth(dateOfBirdth);
      setEmail(email);
      setPhone(phone);
      setCity(city);
      setEducation(education);
      setWorkplaces(workplaces);
      setCertificats(certificates);
      setSkills(skills);
      setHobbies(hobbies);
    } catch (err) {
      console.error(err);
      dispatch(
        setPopupWindowActive({
          title: language.general.popups.wrong.title,
          messenge: language.general.popups.wrong.messenge,
        })
      );
    }
  };

  const handleEducationButton = () => {
    // this function handle "add education" button
    let newEducation;
    if (education === null) newEducation = [];
    else newEducation = [...education];

    newEducation.push({
      startYear: '',
      endYear: '',
      schoolName: '',
      graduatedTitle: '',
    });

    setEducation(newEducation);
  };

  const handleSubmitCv = async () => {
    setSending(true);
    const response = await POST('change-cv', {
      username: user,
      name,
      surname,
      dateOfBirdth,
      email,
      phone,
      city,
      education,
      workplaces,
      certificates,
      skills,
      hobbies,
    });

    if (response.status === 'ok') {
      setSending(false);
      dispatch(
        setPopupWindowActive({
          title: language.userPanel.myCv.popupOK.title,
          messenge: language.userPanel.myCv.popupOK.message,
        })
      );
    } else {
      setSending(false);
      dispatch(
        setPopupWindowActive({
          title: language.userPanel.myCv.popupFail.title,
          messenge: language.userPanel.myCv.popupFail.message,
        })
      );
    }
  };

  const handleWorkplacesButton = () => {
    // this function handle "add workplaces" button
    let newWorkplaces;
    if (workplaces === null) newWorkplaces = [];
    else newWorkplaces = [...workplaces];

    newWorkplaces.push({
      startYear: '',
      endYear: '',
      employerName: '',
      role: '',
    });

    setWorkplaces(newWorkplaces);
  };

  const handleCertificatesButton = () => {
    let newCertificates;
    if (certificates === null) newCertificates = [];
    else newCertificates = [...certificates];

    newCertificates.push({
      certName: '',
      issueDate: '',
      issuingAuthority: '',
    });

    setCertificats(newCertificates);
  };

  const handleSkillsButton = () => {
    let newSkills;
    if (skills === null) newSkills = [];
    else newSkills = [...skills];

    newSkills.push({
      skill: '',
    });
    setSkills(newSkills);
  };

  const handleHobbiesButton = () => {
    let newHobbies;
    if (hobbies === null) newHobbies = [];
    else newHobbies = [...hobbies];

    newHobbies.push({
      hobby: '',
    });
    setHobbies(newHobbies);
  };

  const handleCertificatesInput = (e, i) => {
    const value = e.target.value;
    const newCertificates = [...certificates];
    newCertificates[i] = {
      ...newCertificates[i],
      certName: value,
    };
    setCertificats(newCertificates);
  };

  const handleSkillsInput = (e, i) => {
    const value = e.target.value;
    const newSkills = [...skills];
    newSkills[i] = {
      ...newSkills[i],
      skill: value,
    };
    setSkills(newSkills);
  };

  const handleHobbiesInput = (e, i) => {
    const value = e.target.value;
    const newHobbies = [...hobbies];
    newHobbies[i] = {
      ...newHobbies[i],
      hobby: value,
    };
    setHobbies(newHobbies);
  };

  const handleWorkplacesInput = (e, index, name) => {
    const value = e.target.value;
    const newWorkplaces = [...workplaces];
    if (name === 'employerName') {
      newWorkplaces[index] = {
        ...newWorkplaces[index],
        employerName: value,
      };
    } else if (name === 'yearOfOrigin') {
      newWorkplaces[index] = {
        ...newWorkplaces[index],
        startYear: value,
      };
    } else if (name === 'yearOfEnd') {
      newWorkplaces[index] = {
        ...newWorkplaces[index],
        endYear: value,
      };
    } else if (name === 'position') {
      newWorkplaces[index] = {
        ...newWorkplaces[index],
        role: value,
      };
    }
    setWorkplaces(newWorkplaces);
  };

  const mainInformationInputs = [
    {
      value: name,
      onChange: e => setName(e.target.value),
      label: language.userPanel.myCv.name,
    },
    {
      value: surname,
      onChange: e => setSurname(e.target.value),
      label: language.userPanel.myCv.surname,
    },
    {
      value: dateOfBirdth,
      onChange: e => setDateOfBirdth(e.target.value),
      label: language.userPanel.myCv.dateOfBirdth,
    },
    {
      value: email,
      onChange: e => setEmail(e.target.value),
      label: language.userPanel.myCv.email,
    },
    {
      value: phone,
      onChange: e => setPhone(e.target.value),
      label: language.userPanel.myCv.phone,
    },
    {
      value: city,
      onChange: e => setCity(e.target.value),
      label: language.userPanel.myCv.city,
    },
  ];

  useEffect(() => {
    getUserCvDetails();
  }, [user.username]);

  return render({
    breadcrumbs,
    state: {
      username,
      name,
      surname,
      dateOfBirdth,
      email,
      phone,
      city,
      education,
      workplaces,
      certificates,
      skills,
      hobbies,
      isSending,
    },
    setState: {
      username: setUsername,
      name: setName,
      surname: setSurname,
      dateOfBirdth: setDateOfBirdth,
      email: setEmail,
      phone: setPhone,
      city: setCity,
      education: setEducation,
      workplaces: setWorkplaces,
      certificates: setCertificats,
      skills: setSkills,
      hobbies: setHobbies,
      sending: setSending,
    },
    mainInformationInputs,
    handleEducationButton,
    handleWorkplacesButton,
    handleWorkplacesInput,
    handleCertificatesInput,
    handleCertificatesButton,
    handleSkillsInput,
    handleSkillsButton,
    handleHobbiesInput,
    handleHobbiesButton,
    handleSubmitCv,
  });
};

MyCvLogicLayer.propTypes = {
  render: PropTypes.func.isRequired,
};

export default MyCvLogicLayer;
