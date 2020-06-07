import React, { useState, useEffect } from 'react';

import { offers, handleCitySearch } from '../../propTypes';
import { Container, City } from './citySearch__styles';

const CitySearch = ({ offers, fallback }) => {
  const [cities, setCities] = useState([]);

  const getAllCities = () => {
    const cities = [];
    const noOffers = [];
    for (let offer of offers) {
      const city = offer.city;
      if (!cities.includes(city)) {
        cities.push(city);
        noOffers.push(1);
      } else {
        const index = cities.indexOf(city);
        noOffers[index] = noOffers[index] + 1;
      }
    }
    const citiesObjectArray = cities.map((city, index) => {
      const newCity = { name: city, offers: noOffers[index] };
      return newCity;
    });
    setCities(citiesObjectArray);
  };

  useEffect(() => {
    getAllCities();
  }, []);

  useEffect(() => {
    console.log(cities);
  }, [cities]);

  return (
    <Container>
      {cities?.map(city => (
        <City key={city.name} onClick={() => fallback(city.name)}>
          {city.name}({city.offers})
        </City>
      ))}
    </Container>
  );
};

CitySearch.propTypes = { offers, fallback: handleCitySearch };
export default CitySearch;
