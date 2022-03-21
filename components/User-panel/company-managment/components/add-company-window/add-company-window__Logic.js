import { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { setPopupWindowActive } from '../../../../../Redux/actions';
import apiKey from '../../../../../API/key';
import GET from '../../../../../API/get';
import { getIndustries } from '../../../../../data/industries';

const AddCompanyWindowLogicLayer = ({ render, close, edit }) => {
  const [state, setState] = useState({
    inputs: {
      companyName: '',
      adress: '',
      city: '',
      description: '',
    },
    industry: {
      index: 0,
      name: 'software-development',
    },
    isLoading: false,
    editID: '',
  });

  const [file, setFile] = useState({
    isFile: false,
    name: '',
    content: null,
  });

  const language = useSelector(s => s.language.source.companyPanel.addNewCompanyWindow);
  const username = useSelector(s => s.user.username);
  const dispatch = useDispatch();

  const inputs = [
    {
      label: language.companyName,
      value: state.inputs.companyName,
      name: 'companyName',
      onChange: e => handleInputs(e.target.name, e.target.value),
    },
    {
      label: language.adress,
      value: state.inputs.adress,
      name: 'adress',
      onChange: e => handleInputs(e.target.name, e.target.value),
    },
    {
      label: language.city,
      value: state.inputs.city,
      name: 'city',
      onChange: e => handleInputs(e.target.name, e.target.value),
    },
    {
      label: language.description,
      value: state.inputs.description,
      name: 'description',
      type: 'textarea',
      onChange: e => handleInputs(e.target.name, e.target.value),
    },
  ];

  const closeFunction = () => {
    setState({
      ...state,
      file: {
        isFile: false,
        name: '',
        content: null,
      },
      inputs: {
        companyName: '',
        adress: '',
        city: '',
        description: '',
      },
      industry: {
        index: 0,
        name: 'software-development',
      },
      isLoading: false,
    });
    close();
  };

  const handleOnDrop = useCallback(files => {
    const file = files[0];

    if (file.type !== 'image/jpeg') {
      dispatch(
        setPopupWindowActive({
          title: language.wrongType.title,
          messenge: language.wrongType.message,
        })
      );
    } else if (file.size > 2629000) {
      dispatch(
        setPopupWindowActive({
          title: language.fileToBig.title,
          messenge: language.fileToBig.message,
        })
      );
    } else {
      const newfile = {
        ...file,
        isFile: true,
        name: file.name,
        content: file,
      };
      setFile(newfile);
    }
  }, []);

  const handleInputs = (name, value) => {
    const newInputs = { ...state.inputs };
    const inputs = Object.keys(newInputs);

    for (let input of inputs) {
      if (name === input) {
        newInputs[input] = value;
      }
    }

    setState({
      ...state,
      inputs: newInputs,
    });
  };

  const handleChooseField = (field, index) => {
    setState({
      ...state,
      industry: {
        ...state.industry,
        index,
        name: field.name,
      },
    });
  };

  const handleAddCompanyButton = async ({ editMode }) => {
    setState({
      ...state,
      isLoading: true,
    });

    if (state.inputs.companyName.length < 1) {
      setState({ ...state, isLoading: false });
      dispatch(
        setPopupWindowActive({
          title: language.mustHaveName.title,
          messenge: language.mustHaveName.msg,
        })
      );
    } else if (!file.isFile) {
      setState({ ...state, isLoading: false });
      dispatch(
        setPopupWindowActive({
          title: language.mustHaveLogo.title,
          messenge: language.mustHaveLogo.msg,
        })
      );
    } else if (state.inputs.adress.length < 1) {
      setState({ ...state, isLoading: false });
      dispatch(
        setPopupWindowActive({
          title: language.mustHaveAdress.title,
          messenge: language.mustHaveAdress.msg,
        })
      );
    } else if (state.inputs.city.length < 1) {
      setState({ ...state, isLoading: false });
      dispatch(
        setPopupWindowActive({
          title: language.mustHaveCity.title,
          messenge: language.mustHaveCity.msg,
        })
      );
    } else if (state.inputs.description.length < 1) {
      setState({ ...state, isLoading: false });
      dispatch(
        setPopupWindowActive({
          title: language.mustHaveDescription.title,
          messenge: language.mustHaveDescription.msg,
        })
      );
    } else {
      const form = new FormData();
      form.append('name', state.inputs.companyName);
      form.append('industry', state.industry.name);
      if (!editMode) form.append('logo', file.content);
      form.append('adress', state.inputs.adress);
      form.append('city', state.inputs.city);
      form.append('description', state.inputs.description);
      form.append('owners', [username]);

      if (editMode) {
        form.append('editMode', true);
        form.append('editId', state.editID);
        if (file.content) form.append('logo', file.content);
      }

      try {
        const sent = await fetch(`${apiKey}add-new-company`, {
          method: 'post',
          headers: { 'Contnet-Type': 'multipart/form-data' },
          body: form,
        });
        const res = await sent.json();

        if (res.status === 'ok') {
          setState({ ...state, isLoading: false });
          close();
        } else {
          dispatch(
            setPopupWindowActive({
              title: language.addingErr.title,
              messenge: language.addingErr.msg,
            })
          );
          setState({ ...state, isLoading: false });
        }
      } catch (err) {
        dispatch(
          setPopupWindowActive({
            title: language.addingErr.title,
            messenge: language.addingErr.msg,
          })
        );
        setState({ ...state, isLoading: false });
        throw err;
      }
    }
  };

  const getCompanyToEdit = async () => {
    const data = await GET(`get-company/${edit}`);
    const { company } = data;
    const industries = getIndustries();
    let indexOfElement;

    for (let [index, industry] of industries.entries()) {
      if (company.industry === industry.name) indexOfElement = index;
    }

    setState({
      ...state,
      inputs: {
        ...state.inputs,
        companyName: company.name,
        adress: company.adress,
        city: company.city,
        description: company.description,
      },
      industry: {
        index: indexOfElement,
        name: company.industry,
      },
      editID: company._id,
    });
    setFile({
      isFile: true,
      name: company.logo,
      content: null,
    });
  };

  useEffect(() => {
    if (edit) {
      getCompanyToEdit();
    }
  }, []);

  return render({
    state,
    file,
    close: closeFunction,
    inputs,
    handlers: {
      handleOnDrop,
      handleInputs,
      handleChooseField,
      handleAddCompanyButton,
    },
    edit,
  });
};

AddCompanyWindowLogicLayer.propTypes = {
  render: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export default AddCompanyWindowLogicLayer;
