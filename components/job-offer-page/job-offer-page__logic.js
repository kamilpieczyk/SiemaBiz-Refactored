import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import GET from '../../API/get';
import POST from '../../API/post';
import { setPopupWindowActive } from '../../Redux/actions';

const JobOfferPageLogic = ({ render, offer }) => {
  const [logo, setLogo] = useState(null);
  const [company, setCompany] = useState(null);
  const [companyLocation, setCompanyLocation] = useState(null);
  const [companyAdress, setCompanyAdress] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isApplied, setApplied] = useState(false);

  const user = useSelector(s => s.user);
  const language = useSelector(s => s.language.source.jobOfferPage);
  const dispatch = useDispatch();

  const fetchCompany = async () => {
    const company = await GET(`get-company/${offer.companyID}`);
    setLogo(company.company.logo);
    setCompany(company.company.name);
    setCompanyLocation(company.company.city);
    setCompanyAdress(company.company.adress);
  };

  const handleApplyButton = async () => {
    setLoading(true);
    if (user.username) {
      const data = await POST('apply-job', { username: user.username, jobAdID: offer._id });
      if (data.status === 'ok') {
        setLoading(false);
        setApplied(true);
      }
    } else {
      dispatch(
        setPopupWindowActive({
          title: language.userNotLogged.title,
          messenge: language.userNotLogged.msg,
        })
      );
      setLoading(false);
    }
  };

  const checkIfUserAppliedBefore = () => {
    const applications = offer.applications;
    const checkIfIncludes = applications.includes(user.username);
    if (checkIfIncludes) setApplied(true);
  };

  useEffect(() => {
    fetchCompany();
  }, []);

  useEffect(() => {
    checkIfUserAppliedBefore();
  }, [user]);

  return render({
    isLoading,
    isApplied,
    handleApplyButton,
    offer: {
      logo,
      company,
      companyLocation,
      companyAdress,
      title: offer.title,
      city: offer.city,
      hours: offer.hours,
      wages: offer.wages,
      date: offer.date,
      industry: offer.industry,
      description: offer.description,
      duties: offer.duties,
      requirements: offer.requirements,
    },
  });
};

JobOfferPageLogic.propTypes = {
  render: PropTypes.func.isRequired,
  offer: PropTypes.shape({
    companyID: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    hours: PropTypes.string.isRequired,
    wages: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    duties: PropTypes.array.isRequired,
    requirements: PropTypes.array.isRequired,
  }),
};

export default JobOfferPageLogic;
