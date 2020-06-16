import { useState, useEffect, useMemo } from 'react';

import { render } from './apoitments__types';
import POST from '../../../API/post';
import GET from '../../../API/get';
import DELETE from '../../../API/delete';

const Logic = ({ render }) => {
  const [isAddNewApoitmentWindowActive, setAddNewApoitmentWindowActive] = useState(false);
  const [isApoitmentWindowLoading, setApoitmentWindowLoading] = useState(false);
  const [isApoitmentDeleting, setApoitmentDeleting] = useState(false);
  const [apoitments, setApoitments] = useState([]);

  const handleNewApoitmentWindowButton = () => setAddNewApoitmentWindowActive(!isAddNewApoitmentWindowActive);

  const handleAddNewApoitment = async date => {
    if (date) {
      setApoitmentWindowLoading(true);
      const data = await POST('add-new-apoitment', { date });
      if (data.status === 'ok') {
        setApoitmentWindowLoading(false);
        setAddNewApoitmentWindowActive(false);
        const newApoitments = [...apoitments];
        newApoitments.push(data.object);
        const sortedApoitments = sortApoitmentsByDate(newApoitments);
        setApoitments(sortedApoitments);
      }
    }
  };

  const getApoitmentsList = async () => {
    const apoitments = await GET('get-apoitments');
    const sortedApoitments = sortApoitmentsByDate(apoitments);
    setApoitments(sortedApoitments);
  };

  const handleDeleteApoitment = async id => {
    setApoitmentDeleting(true);
    const del = await DELETE(`apoitment/${id}`);
    if (del.status === 'ok') {
      getApoitmentsList();
      setApoitmentDeleting(true);
    }
  };

  const sortApoitmentsByDate = apoitments => {
    const apoitmentsCopy = [...apoitments];
    const newArray = [];
    for (let apoitment of apoitmentsCopy) {
      apoitment = {
        date: new Date(apoitment.date),
        available: apoitment.available,
        bookedBy: apoitment.bookedBy,
        bookedAt: apoitment.bookedAt,
        _id: apoitment._id,
      };
      newArray.push(apoitment);
    }
    newArray.sort((a, b) => a.date - b.date);
    return newArray;
  };

  useEffect(() => {
    getApoitmentsList();
  }, []);

  return render({
    state: { isAddNewApoitmentWindowActive, isApoitmentWindowLoading, apoitments, isApoitmentDeleting },
    handlers: { handleNewApoitmentWindowButton, handleAddNewApoitment, handleDeleteApoitment },
  });
};

Logic.propTypes = { render };
export default Logic;
