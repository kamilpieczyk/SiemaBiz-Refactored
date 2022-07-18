import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default ({ render }) => {
  const [isClicked, setClicked] = useState(false);

  const dispatch = useDispatch();
  const isMenuActive = useSelector(state => state.globalMenu);

  return render({
    isClicked,
    isMenuActive,
    dispatch,
    handleClick: () => setClicked(!isClicked),
  });
};
