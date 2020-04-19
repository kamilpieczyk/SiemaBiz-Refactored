import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

import sleep from '../../API/sleep'

const CompanySiteLogic = ({ company, render }) => {

  const [ geo, setGeo ] = useState({
    width: '100vw',
    height: '100vh',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 16,
    mapStyle: 'mapbox://styles/destroyerpl/ck95q5olh1ptj1imwxpdc6cgo',
  });
  const [ isLoading, setLoading ] = useState( true );

  const getLocation = async () => {
    const adressArray = company.adress.split( ' ' );
    const adress = adressArray.join( '+' );
    const url = `https://geocode.xyz/${ company.city },.${ adress }?json=1`;

    let data;
    do{
      data = await fetch( url );
      const geoLoc = await data.json();
      
      if( data.status === 200 ){
        setGeo({ 
          ...geo,
          longitude: Number( geoLoc.longt ),
          latitude: Number( geoLoc.latt )
        });
        setLoading( false );
      }
      else sleep( 2000 );
    } while( data.status !== 200 );
  }

  const handleButtonClick = () => {
    window.scrollTo( 0, window.innerHeight );
  }

  useEffect(
    () => {
      getLocation();
    }, []
  )

  return render({
    state: {
      geo,
      isLoading
    },
    handleButtonClick
  })
}

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
  })
}

export default CompanySiteLogic;