import { useSelector, useDispatch } from 'react-redux';

import { setMenuInactive } from '../../../../../Redux/actions';
import globalMenu from '../../../../../data/globalMenu';

export default ({ render }) => {
  const languageSource = useSelector(state => state.language.source.menu);
  const isPageScrolled = useSelector(state => state.isPageScrolled);

  const dispatch = useDispatch();

  return render({
    source: globalMenu(),
    isPageScrolled,
    handleOptionClick: () => dispatch(setMenuInactive()),
  });
};
