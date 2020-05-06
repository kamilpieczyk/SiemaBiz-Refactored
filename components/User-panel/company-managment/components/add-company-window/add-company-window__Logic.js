import { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { setPopupWindowActive } from '../../../../../Redux/actions'
import apiKey from '../../../../../API/key'

const AddCompanyWindowLogicLayer = ({ render, close }) => {

  const [ state, setState ] = useState({
    file: {
      isFile: false,
      name: '',
      content: null
    },
    inputs: {
      companyName: '',
      adress: '',
      city: '',
      description: ''
    },
    industry: {
      index: 0,
      name: 'software-development'
    },
    isLoading: false
  });

  const language = useSelector( s => s.language.source.companyPanel.addNewCompanyWindow );
  const username = useSelector( s => s.user.username );
  const dispatch = useDispatch();

  const inputs = [
    {
      label: language.companyName,
      value: state.inputs.companyName,
      name: 'companyName',
      onChange: e => handleInputs( e.target.name, e.target.value ),
    },
    {
      label: language.adress,
      value: state.inputs.adress,
      name: 'adress',
      onChange: e => handleInputs( e.target.name, e.target.value ),
    },
    {
      label: language.city,
      value: state.inputs.city,
      name: 'city',
      onChange: e => handleInputs( e.target.name, e.target.value ),
    },
    {
      label: language.description,
      value: state.inputs.description,
      name: 'description',
      type: 'textarea',
      onChange: e => handleInputs( e.target.name, e.target.value ),
    },
  ];

  const handleOnDrop = useCallback( files => {
    const file = files[0];

    if( file.type !== 'image/jpeg' ){
      dispatch( setPopupWindowActive({
        title: language.wrongType.title,
        messenge: language.wrongType.message
      }) )
    }
    else if( file.size > 2629000 ){
      dispatch( setPopupWindowActive({
        title: language.fileToBig.title,
        messenge: language.fileToBig.message
      }) )
    }
    else{
      setState({
        ...state,
        file:{
          ...state.file,
          isFile: true,
          name: file.name,
          content: file
        }
      })
    }
  }, [])

  const handleInputs = ( name, value ) => {
    const newInputs = { ...state.inputs };
    const inputs = Object.keys( newInputs );

    for( let input of inputs ){
      if( name === input ){
        newInputs[ input ] = value
      }
    }
    
    setState({
      ...state,
      inputs: newInputs
    });
  }

  const handleChooseField = ( field, index ) => {
    setState({
      ...state,
      industry: {
        ...state.industry,
        index,
        name: field.name
      }
    })
  }

  const handleAddCompanyButton = async () => {
    setState({
      ...state,
      isLoading: true,
    })
    if( state.inputs.companyName.length < 1 ){
      setState({ ...state, isLoading: false });
      dispatch( setPopupWindowActive({
        title: language.mustHaveName.title,
        messenge: language.mustHaveName.msg
      }) )
    }
    else if( !state.file.isFile ){
      setState({ ...state, isLoading: false });
      dispatch( setPopupWindowActive({
        title: language.mustHaveLogo.title,
        messenge: language.mustHaveLogo.msg
      }) )
    }
    else if( state.inputs.adress.length < 1 ){
      setState({ ...state, isLoading: false });
      dispatch( setPopupWindowActive({
        title: language.mustHaveAdress.title,
        messenge: language.mustHaveAdress.msg
      }) )
    }
    else if( state.inputs.city.length < 1 ){
      setState({ ...state, isLoading: false });
      dispatch( setPopupWindowActive({
        title: language.mustHaveCity.title,
        messenge: language.mustHaveCity.msg
      }) )
    }
    else if( state.inputs.description.length < 1 ){
      setState({ ...state, isLoading: false });
      dispatch( setPopupWindowActive({
        title: language.mustHaveDescription.title,
        messenge: language.mustHaveDescription.msg
      }) )
    }
    else{
      const form = new FormData();
      form.append( 'name', state.inputs.companyName );
      form.append( 'industry', state.industry.name );
      form.append( 'logo', state.file.content );
      form.append( 'adress', state.inputs.adress );
      form.append( 'city', state.inputs.city );
      form.append( 'description', state.inputs.description );
      form.append( 'owners', [ username ] );

      try{
        const sent = await fetch( `${ apiKey }add-new-company`, {
          method: 'post',
          headers: { "Contnet-Type": "multipart/form-data" },
          body: form
        } );
        const res = await sent.json();
  
        if( res.status === 'ok' ){
          setState({...state, isLoading: false });
          close();
        }
        else{
          dispatch( setPopupWindowActive({
            title: language.addingErr.title,
            messenge: language.addingErr.msg
          }) );
          setState({...state, isLoading: false });
        }
      }
      catch( err ){
        dispatch( setPopupWindowActive({
          title: language.addingErr.title,
          messenge: language.addingErr.msg
        }) );
        setState({...state, isLoading: false });
        throw err
      }
    }

  }

  return render({
    state,
    inputs,
    handlers: {
      handleOnDrop,
      handleInputs,
      handleChooseField,
      handleAddCompanyButton
    }
  })
}

AddCompanyWindowLogicLayer.propTypes = {
  render: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
}

export default AddCompanyWindowLogicLayer;