import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import sleep from '../../API/sleep';
import POST from '../../API/post';
import { setPopupWindowActive } from '../../Redux/actions';

const CompanySiteLogic = ({ company, render }) => {
  const [geo, setGeo] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 16,
    mapStyle: 'mapbox://styles/destroyerpl/ck95q5olh1ptj1imwxpdc6cgo',
  });
  const [isLoading, setLoading] = useState(true);

  const router = useRouter();
  const dispatch = useDispatch();
  const popup = useSelector(s => s.language.source.general.popups.wrong);
  const currentUser = useSelector(s => s.user.username);

  const getLocation = async () => {
    const adressArray = company.adress.split(' ');
    const adress = adressArray.join('+');
    const url = `https://geocode.xyz/${company.city},.${adress}?json=1`;

    let data;
    do {
      data = await fetch(url);
      const geoLoc = await data.json();

      if (data.status === 200) {
        setGeo({
          ...geo,
          longitude: Number(geoLoc.longt),
          latitude: Number(geoLoc.latt),
        });
        setLoading(false);
      } else sleep(2000);
    } while (data.status !== 200);
  };

  const handleButtonClick = () => {
    window.scrollTo(0, window.innerHeight);
  };

  const handleUserBoxClick = username => {
    if (currentUser !== username)
      router.push({
        pathname: '/user',
        query: { username },
      });
  };

  const checkIfUserWorksForThisCompany = user => {
    const employeesList = [...company.employees, ...company.owners];
    for (let employee of employeesList) if (employee === user) return true;
  };

  const handleWorkForThisCompanyButton = async (companyID, username) => {
    const addToMyemployersList = await POST('add-company-to-employers-list', {
      username,
      company: companyID,
    });
    const { status } = addToMyemployersList;

    if (status === 'ok') router.reload();
    else
      dispatch(
        setPopupWindowActive({
          title: popup.title,
          messenge: popup.messenge,
        })
      );
  };

  const removeFromMyEmployersList = async (username, id) => {
    const remove = await POST('remove-company-from-employees', { username, company: id });
    if (remove.status === 'ok') router.reload();
    else
      dispatch(
        setPopupWindowActive({
          title: popup.title,
          messenge: popup.messenge,
        })
      );
  };

  useEffect(() => {
    getLocation();
  }, []);

  return render({
    state: {
      geo,
      isLoading,
    },
    handleButtonClick,
    handleUserBoxClick,
    handleWorkForThisCompanyButton,
    checkIfUserWorksForThisCompany,
    removeFromMyEmployersList,
  });
};

CompanySiteLogic.propTypes = {
  render: PropTypes.func.isRequired,
  company: PropTypes.shape({
    owners: PropTypes.array.isRequired,
    employees: PropTypes.array.isRequired,
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    adress: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    industry: PropTypes.string.isRequired,
  }),
};

export default CompanySiteLogic;
