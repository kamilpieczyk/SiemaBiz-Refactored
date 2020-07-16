import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { setGlobalLoadingActive, setGlobalLoadingInactive } from '../Redux/actions';

const Link = ({ adress, callback, children }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    dispatch(setGlobalLoadingActive());
    if (callback) callback();
    router.push(adress).then(() => dispatch(setGlobalLoadingInactive()));
  };
  return <a onClick={handleClick}>{children}</a>;
};

export default Link;
