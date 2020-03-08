import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useRef, useEffect } from 'react'

import auth from '../../../API/authorisation'
import POST from '../../../API/post'
import { setPopupWindowActive } from '../../../Redux/actions'

const MyCvLogicLayer = ({ render }) => {

  const [ username, setUsername ] = useState( null )
  const [ name, setName ] = useState( '' )
  const [ surname, setSurname ] = useState( '' )
  const [ dateOfBirdth, setDateOfBirdth ] = useState( '' )
  const [ email, setEmail ] = useState( '' )
  const [ phone, setPhone ] = useState( '' )
  const [ city, setCity ] = useState( '' )
  const [ education, setEducation ] = useState( null )
  const [ workplaces, setWorkplaces ] = useState( null )
  const [ certificates, setCertificats ] = useState( []) 
  const [ skills, setSkills ] = useState( [] )
  const [ hobbies, setHobbies ] = useState( [] )
  const [ sending, setSending ] = useState( false )

  const language = useSelector( s => s.language.source );
  const breadcrumbs =  [ language.userPanel.title, language.userPanel.userSettings.title ];
  const dispatch = useDispatch();

  const getUserCvDetails = async () => {
    try{
      const user = await auth();
      const username = user.username;

      const myCvDetailsObject = await POST( 'get-cv', { username } );

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
        hobbies
      } = myCvDetailsObject.data;

      setName( name )
      setSurname( surname )
      setDateOfBirdth( dateOfBirdth )
      setEmail( email )
      setPhone( phone )
      setCity( city )
      setEducation( education )
      setWorkplaces( workplaces )
      setCertificats( certificates )
      setSkills( skills )
      setHobbies( hobbies )
    }
    catch( err ){
      console.error( err );
      dispatch( setPopupWindowActive({
        title: language.general.popups.wrong.title,
        messenge: language.general.popups.wrong.messenge
      }) )
    }
  }

  const handleEducationButton = () => {
    // this function handle "add education" button
    let newEducation;
    if( education === null ) newEducation = [];
    else newEducation = [ ...education ]
    
    newEducation.push({
        startYear: "",
        endYear: "",
        schoolName: "",
        graduatedTitle: ""
    })

    setEducation( newEducation )

  }

  const handleWorkplacesButton = () => {
    // this function handle "add workplaces" button
    let newWorkplaces;
    if( workplaces === null ) newWorkplaces = [];
    else newWorkplaces = [ ...workplaces ];
    
    newWorkplaces.push({
      startYear: "",
      endYear: "",
      employerName: "",
      role: ""
    })

    setWorkplaces( newWorkplaces )

  }

  const handleWorkplacesInput = ( e, index, name ) => {
    const value = e.target.value;
    const newWorkplaces = [ ...workplaces ];
    if( name === 'employerName' ){
      newWorkplaces[index] = {
        ...newWorkplaces[index],
        employerName: value
      };
    }
    else if( name === 'yearOfOrigin' ){
      newWorkplaces[index] = {
        ...newWorkplaces[index],
        startYear: value
      };
    }
    else if( name === 'yearOfEnd' ){
      newWorkplaces[index] = {
        ...newWorkplaces[index],
        endYear: value
      };
    }
    else if( name === 'position' ){
      newWorkplaces[index] = {
        ...newWorkplaces[index],
        role: value
      };
    }
    setWorkplaces( newWorkplaces );
  }

  const mainInformationInputs = [
    {
      value: name,
      onChange: e => setName( e.target.value ),
      label: language.userPanel.myCv.name
    },
    {
      value: surname,
      onChange: e => setSurname( e.target.value ),
      label: language.userPanel.myCv.surname
    },
    {
      value: dateOfBirdth,
      onChange: e => setDateOfBirdth( e.target.value ),
      label: language.userPanel.myCv.dateOfBirdth
    },
    {
      value: email,
      onChange: e => setEmail( e.target.value ),
      label: language.userPanel.myCv.email
    },
    {
      value: phone,
      onChange: e => setPhone( e.target.value ),
      label: language.userPanel.myCv.phone
    },
    {
      value: city,
      onChange: e => setCity( e.target.value ),
      label: language.userPanel.myCv.city
    },
  ]

  useEffect(
    () => {
      getUserCvDetails();
    },
    []
  )

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
      sending
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
      sending: setSending
    },
    mainInformationInputs,
    handleEducationButton,
    handleWorkplacesButton,
    handleWorkplacesInput
  })
}

MyCvLogicLayer.propTypes = {
  render: PropTypes.func.isRequired
}

export default MyCvLogicLayer