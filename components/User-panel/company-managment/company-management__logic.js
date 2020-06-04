import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import AUTH from '../../../API/authorisation';
import GET from '../../../API/get';
import POST from '../../../API/post';
import { setPopupWindowActive, logoutUser } from '../../../Redux/actions';
import { getIndustries } from '../../../data/industries';

const CompanyManagementLogic = ({ render }) => {
  const [companies, setCompanies] = useState([]);
  const [employers, setEmployers] = useState([]);
  const [employeesWindow, setEmployeesWindow] = useState({
    isActive: false,
    owners: [],
    employees: [],
    company: '',
  });
  const [jobAdsWindow, setJobAdsWindow] = useState({
    isActive: false,
    companyID: '',
    jobAds: [],
  });
  const [cooperationOffers, setCooperationOffers] = useState({
    isActive: false,
    companyID: '',
    cooperationOffers: [],
  });
  const [addCooperationOffer, setAddCooperationOffer] = useState({
    isActive: false,
    isLoading: false,
    isEditMode: false,
    editID: null,
    title: '',
    content: '',
    city: '',
    industry: {
      title: 'software-development',
      index: 0,
    },
  });
  const [addJobAd, setAddJobAd] = useState({
    isActive: false,
    isEditMode: false,
    editID: null,
    companyName: '',
    companyID: '',
    inputs: {
      title: '',
      city: '',
      hoursRange: '',
      wages: '',
      industry: {
        index: 0,
        value: 'software-development',
      },
      duties: '',
      requirements: '',
      description: '',
    },
  });
  const [isLoading, setLoading] = useState({
    deleteCompany: false,
    archivise: false,
    jobAd: false,
  });
  const [isArchiviseActive, setArchiviseActive] = useState({
    bool: false,
    id: '',
  });
  const [cvWindow, setCvWindow] = useState({
    isActive: false,
    applications: [],
  });
  const [addNewCompanyWindow, setNewCompanyWindow] = useState({
    isActive: false,
    editID: '',
  });
  const [isSearchCompanyWindowActive, setSearchCompanyWindowActive] = useState(false);

  const dispatch = useDispatch();
  const language = useSelector(s => s.language.source);
  const popupWrong = useSelector(s => s.language.source.general.popups.wrong);

  const getUserCompanies = async () => {
    const authorisation = await AUTH();

    if (authorisation.status === 'authorised') {
      const userCompanies = await GET(`get-user-companies/${authorisation.username}`);
      setCompanies(userCompanies.companies);
    } else {
      dispatch(
        setPopupWindowActive({
          title: language.general.popups.wrong.title,
          messenge: language.general.popups.wrong.messenge,
        })
      );
      dispatch(logoutUser());
    }
  };

  const getUserEmployers = async () => {
    const authorisation = await AUTH();

    if (authorisation.status === 'authorised') {
      const userCompanies = await GET(`get-user-employers/${authorisation.username}`);
      setEmployers(userCompanies.companies);
    } else {
      dispatch(
        setPopupWindowActive({
          title: language.general.popups.wrong.title,
          messenge: language.general.popups.wrong.messenge,
        })
      );
      dispatch(logoutUser());
    }
  };

  const handleEmployeeListButton = (owners, employees, company) => {
    if (employeesWindow.isActive) {
      const window = {
        ...employeesWindow,
        isActive: false,
        owners: [],
        employees: [],
        company: '',
      };
      setEmployeesWindow(window);
    } else {
      const window = {
        ...employeesWindow,
        isActive: true,
        owners,
        employees,
        company,
      };
      setEmployeesWindow(window);
    }
  };

  const handleAddOwnerButton = async (nick, company) => {
    const data = await POST('add-shareholder', {
      username: nick,
      company,
    });

    if (data.status === 'ok') {
      const index = employeesWindow.employees.indexOf(nick);
      const newEmployees = [...employeesWindow.employees];
      newEmployees.splice(index, 1);

      const window = {
        ...employeesWindow,
        owners: [...employeesWindow.owners, nick],
        employees: newEmployees,
      };

      setEmployeesWindow(window);
    }
  };

  const handleRemoveOwnerButton = async (nick, company) => {
    const data = await POST('remove-shareholder', {
      username: nick,
      company,
    });

    if (data.status === 'removed') {
      const index = employeesWindow.owners.indexOf(nick);
      const newOwners = [...employeesWindow.owners];
      newOwners.splice(index, 1);

      const window = {
        ...employeesWindow,
        owners: newOwners,
        employees: [...employeesWindow.employees, nick],
      };

      setEmployeesWindow(window);
    }
  };

  const handleRemoveEmployeeButton = async (nick, company) => {
    const data = await POST('remove-user-from-company', {
      username: nick,
      company,
    });

    if (data.status === 'deleted') {
      const index = employeesWindow.employees.indexOf(nick);
      const newEmployees = [...employeesWindow.employees];
      newEmployees.splice(index, 1);

      const window = {
        ...employeesWindow,
        employees: newEmployees,
      };

      setEmployeesWindow(window);
    }
  };

  const handleDeleteCompanyButton = async (id, logo) => {
    setLoading({ ...isLoading, deleteCompany: true });
    const deleteData = await POST('delete-company', { id, logo });
    if (deleteData.status === 'deleted') {
      setLoading({ ...isLoading, deleteCompany: false });
      getUserCompanies();
    }
  };

  const handleManageJobAdsButton = async (companyID, close) => {
    if (close) setJobAdsWindow({ ...jobAdsWindow, isActive: false });
    else {
      const ads = await GET(`get-job-ads/${companyID}`);

      setJobAdsWindow({
        ...jobAdsWindow,
        isActive: true,
        companyID,
        jobAds: ads.ads,
      });
      setCooperationOffers({
        ...cooperationOffers,
        isActive: false,
        companyID: '',
        cooperationOffers: [],
      });
    }
  };

  const handleManageCoopOffersButton = async ({ companyID, close = false }) => {
    if (close)
      setCooperationOffers({
        ...cooperationOffers,
        isActive: false,
        companyID: '',
        cooperationOffers: [],
      });
    else {
      const offers = await GET(`get-coop-offers/${companyID}`);
      setCooperationOffers({
        ...cooperationOffers,
        isActive: true,
        companyID,
        cooperationOffers: offers,
      });
      setJobAdsWindow({ ...jobAdsWindow, isActive: false });
    }
  };

  const handleArchiviseJobAd = (adID, cancel) => {
    if (cancel) setArchiviseActive({ bool: false, id: '' });
    // use if button 'cancel' has been clicked
    else {
      if (isArchiviseActive.bool && adID !== isArchiviseActive.id) {
        // if other option is under archivisation
        setArchiviseActive({ ...isArchiviseActive, id: adID });
      } else if (isArchiviseActive.bool) {
        // use if button 'yes' has been clicked
        return async () => {
          setLoading({ ...isLoading, archivise: true });
          const archivise = await POST('archive-job-ad', { id: adID });
          if (archivise.status === 'ok') {
            const ads = await GET(`get-job-ads/${jobAdsWindow.companyID}`);
            setJobAdsWindow({
              ...jobAdsWindow,
              isActive: true,
              jobAds: ads.ads,
            });
            setArchiviseActive({ bool: false, id: '' });
            setLoading({ ...isLoading, archivise: false });
          }
        };
      } else {
        // use if icon 'archivise' has been clicked
        setArchiviseActive({ bool: true, id: adID });
      }
    }
  };

  const handleCooperationOffersWindow = async (close = false, edit = false, offerID) => {
    if (close) {
      setAddCooperationOffer({
        ...addCooperationOffer,
        isActive: false,
        isEditMode: false,
        editID: null,
        title: '',
        content: '',
        industry: {
          title: 'software-development',
          index: 0,
        },
      });
    } else if (edit) {
      const getOfferToEdit = await GET(`get-coop-offer/${offerID}`);
      const offer = getOfferToEdit.offer;
      const industries = getIndustries();
      let index = 0;
      for (let industry of industries) {
        if (industry.name === offer.industry) {
          const i = industries.indexOf(industry);
          index = i;
        }
      }
      setAddCooperationOffer({
        ...addCooperationOffer,
        isActive: true,
        isEditMode: true,
        editID: offer._id,
        title: offer.title,
        content: offer.content,
        city: offer.city,
        industry: {
          title: offer.industry,
          index,
        },
      });
    } else {
      setAddCooperationOffer({
        ...addCooperationOffer,
        isActive: true,
      });
    }
  };

  const handleCooperationOffersInputs = ({ value, inputName }) => {
    const names = ['title', 'city', 'content'];
    const currentState = { ...addCooperationOffer };
    if (inputName === 'industry') {
      setAddCooperationOffer({
        ...addCooperationOffer,
        industry: {
          index: value.index,
          title: value.field.name,
        },
      });
    } else {
      for (let name of names) if (name === inputName) currentState[name] = value;
      setAddCooperationOffer(currentState);
    }
  };

  const handleArchiviseCooperationOffer = async (id, further, cancel) => {
    setArchiviseActive({ bool: cancel ? false : true, id: cancel ? '' : id });
    if (further) {
      const archivise = await POST('archivise-cooperation-offer', {
        id,
      });
      if (archivise.status === 'ok') {
        setArchiviseActive({ bool: false, id: '' });
        handleManageCoopOffersButton({
          companyID: cooperationOffers.companyID,
          close: false,
        });
      } else {
        dispatch(
          setPopupWindowActive({
            title: language.general.popups.wrong.title,
            messenge: language.general.popups.wrong.messenge,
          })
        );
      }
    }
  };

  const submitCooperationOfferButton = async () => {
    setAddCooperationOffer({ ...addCooperationOffer, isLoading: true });
    let query = addCooperationOffer.isEditMode
      ? await POST('edit-coop-offer', {
          title: addCooperationOffer.title,
          content: addCooperationOffer.content,
          industry: addCooperationOffer.industry.title,
          city: addCooperationOffer.city,
          id: addCooperationOffer.editID,
        })
      : await POST('add-new-coop-offer', {
          title: addCooperationOffer.title,
          content: addCooperationOffer.content,
          company: cooperationOffers.companyID,
          industry: addCooperationOffer.industry.title,
          city: addCooperationOffer.city,
        });

    if (query.status === 'ok') {
      setAddCooperationOffer({
        ...addCooperationOffer,
        isLoading: false,
        isActive: false,
        title: '',
        content: '',
        city: '',
        industry: {
          title: 'software-development',
          index: 0,
        },
      });
      handleManageCoopOffersButton({
        companyID: cooperationOffers.companyID,
        close: false,
      });
    } else {
      setAddCooperationOffer({
        ...addCooperationOffer,
        isLoading: false,
        isActive: false,
      });
      setPopupWindowActive({
        title: popupWrong.title,
        messenge: popupWrong.messenge,
      });
    }
  };

  const handleJobAdWindow = async (edit, close, { companyID = '', companyName = '' }) => {
    if (close) {
      setAddJobAd({
        isActive: false,
        isEditMode: false,
        companyName: '',
        companyID: '',
        inputs: {
          title: '',
          city: '',
          hoursRange: '',
          wages: '',
          industry: {
            index: 0,
            value: 'software-development',
          },
          duties: '',
          requirements: '',
          description: '',
        },
      });
    } else if (edit) {
      const ad = await GET(`get-job-ad/${edit}`);
      const industries = require('../../../data/industries').getIndustries();
      const industryIndex = industries.findIndex(industry => industry.name === ad.industry);
      setAddJobAd({
        ...addJobAd,
        isActive: true,
        isEditMode: true,
        companyID,
        companyName,
        editID: ad._id,
        inputs: {
          ...addJobAd.inputs,
          title: ad.title,
          city: ad.city,
          hoursRange: ad.hours,
          wages: ad.wages,
          industry: {
            index: industryIndex,
            value: ad.industry,
          },
          duties: ad.duties.join(','),
          requirements: ad.requirements.join(','),
          description: ad.description,
        },
      });
    } else {
      setAddJobAd({
        ...addJobAd,
        isActive: true,
        companyID,
        companyName,
      });
    }
  };

  const handleJobAdWindowInputs = (name, value) => {
    const array = Object.keys(addJobAd.inputs);
    for (let key of array) {
      if (key === name) {
        const newInputs = { ...addJobAd.inputs };
        newInputs[name] = value;
        setAddJobAd({
          ...addJobAd,
          inputs: newInputs,
        });
      }
    }
  };

  const handleJobAdWindowChooseField = field => {
    const industries = require('../../../data/industries').getIndustries();
    const index = industries.findIndex(industry => industry.name === field.name);
    setAddJobAd({
      ...addJobAd,
      inputs: {
        ...addJobAd.inputs,
        industry: {
          index,
          value: field.name,
        },
      },
    });
  };

  const handleJobAdWindowSubmit = async ({ mode = 'add' }) => {
    setLoading({
      ...isLoading,
      jobAd: true,
    });

    if (mode === 'add') {
      const data = await POST('add-job-ad', {
        title: addJobAd.inputs.title,
        city: addJobAd.inputs.city,
        wages: addJobAd.inputs.wages,
        hours: addJobAd.inputs.hoursRange,
        industry: addJobAd.inputs.industry.value,
        duties: addJobAd.inputs.duties,
        requirements: addJobAd.inputs.requirements,
        description: addJobAd.inputs.description,
        companyID: addJobAd.companyID,
      });

      if (data.status === 'ok') {
        setLoading({
          ...isLoading,
          jobAd: false,
        });
        setAddJobAd({
          isActive: false,
          isEditMode: false,
          companyName: '',
          companyID: '',
          inputs: {
            title: '',
            city: '',
            hoursRange: '',
            wages: '',
            industry: {
              index: 0,
              value: 'software-development',
            },
            duties: '',
            requirements: '',
            description: '',
          },
        });
        handleManageJobAdsButton(addJobAd.companyID);
      }
    } else if (mode === 'edit') {
      const data = await POST('edit-job-ad', {
        title: addJobAd.inputs.title,
        city: addJobAd.inputs.city,
        hours: addJobAd.inputs.hoursRange,
        wages: addJobAd.inputs.wages,
        industry: addJobAd.inputs.industry.value,
        duties: addJobAd.inputs.duties,
        requirements: addJobAd.inputs.requirements,
        description: addJobAd.inputs.description,
        jobAdID: addJobAd.editID,
      });

      if (data.status === 'ok') {
        setLoading({
          ...isLoading,
          jobAd: false,
        });
        setAddJobAd({
          isActive: false,
          isEditMode: false,
          companyName: '',
          companyID: '',
          inputs: {
            title: '',
            city: '',
            hoursRange: '',
            wages: '',
            industry: {
              index: 0,
              value: 'software-development',
            },
            duties: '',
            requirements: '',
            description: '',
          },
        });
        handleManageJobAdsButton(addJobAd.companyID);
      }
    }
  };

  const handleCvWindow = applications => {
    if (applications) {
      setCvWindow({
        isActive: true,
        applications,
      });
    } else {
      setCvWindow({
        isActive: false,
        applications: [],
      });
    }
  };

  const handleAddNewCompanyButton = (close, edit, id) => {
    if (close) {
      setNewCompanyWindow({
        ...addNewCompanyWindow,
        isActive: false,
        editID: '',
      });
      getUserCompanies();
    } else if (edit) {
      setNewCompanyWindow({
        ...addNewCompanyWindow,
        isActive: true,
        editID: id,
      });
    } else {
      setNewCompanyWindow({
        ...addNewCompanyWindow,
        isActive: true,
      });
    }
  };

  const handleSearchWindow = () => setSearchCompanyWindowActive(!isSearchCompanyWindowActive);

  useEffect(() => {
    getUserCompanies();
    getUserEmployers();
  }, []);

  return render({
    state: {
      companies,
      employers,
      employeesWindow,
      isLoading,
      jobAdsWindow,
      isArchiviseActive,
      addJobAd,
      cvWindow,
      addNewCompanyWindow,
      isSearchCompanyWindowActive,
      cooperationOffers,
      addCooperationOffer,
    },
    handlers: {
      handleEmployeeListButton,
      handleAddOwnerButton,
      handleRemoveOwnerButton,
      handleRemoveEmployeeButton,
      handleDeleteCompanyButton,
      handleManageJobAdsButton,
      handleArchiviseJobAd,
      handleJobAdWindow,
      handleJobAdWindowInputs,
      handleJobAdWindowChooseField,
      handleJobAdWindowSubmit,
      handleCvWindow,
      handleAddNewCompanyButton,
      handleSearchWindow,
      handleManageCoopOffersButton,
      handleCooperationOffersWindow,
      handleCooperationOffersInputs,
      submitCooperationOfferButton,
      handleArchiviseCooperationOffer,
    },
  });
};

CompanyManagementLogic.propTypes = {
  render: PropTypes.func.isRequired,
};

export default CompanyManagementLogic;
