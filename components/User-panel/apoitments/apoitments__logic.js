import { useState, useEffect, useMemo } from 'react';

import { render } from './apoitments__types';
import POST from '../../../API/post';
import GET from '../../../API/get';

const Logic = ({ render }) => {
  const [isAddNewApoitmentWindowActive, setAddNewApoitmentWindowActive] = useState(false);
  const [isApoitmentWindowLoading, setApoitmentWindowLoading] = useState(false);
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
        setApoitments(newApoitments);
      }
    }
  };

  const getApoitmentsList = async () => {
    const apoitments = await GET('get-apoitments');
    setApoitments(apoitments);
  };

  useEffect(() => {
    getApoitmentsList();
  }, []);

  return render({
    state: { isAddNewApoitmentWindowActive, isApoitmentWindowLoading, apoitments },
    handlers: { handleNewApoitmentWindowButton, handleAddNewApoitment },
  });
};

Logic.propTypes = { render };
export default Logic;
