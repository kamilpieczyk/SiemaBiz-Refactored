import { useSelector, useDispatch } from 'react-redux'

import { setMenuInactive } from '../../../../../Redux/actions'

export default ({ render }) => {
  
  const languageSource = useSelector( state => state.language.source )
  const isPageScrolled = useSelector( state => state.isPageScrolled )

  const dispatch = useDispatch();

  return render({
    source: languageSource,
    isPageScrolled,
    handleOptionClick: () => dispatch( setMenuInactive() )
  })
}