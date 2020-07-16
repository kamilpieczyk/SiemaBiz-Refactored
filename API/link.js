import Router, { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { setGlobalLoadingActive, setGlobalLoadingInactive } from '../Redux/actions';
import store from '../Redux/store';

const A = styled.a`
  cursor: pointer;
`;

const Link = ({ adress, callback, children }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleClick = () => {
    dispatch(setGlobalLoadingActive());
    if (callback) callback();
    router.push(adress).then(() => dispatch(setGlobalLoadingInactive()));
  };
  return <A onClick={handleClick}>{children}</A>;
};

export const useLink = () => adress => {
  store.dispatch(setGlobalLoadingActive());
  Router.push(adress).then(() => store.dispatch(setGlobalLoadingInactive()));
};

export default Link;
