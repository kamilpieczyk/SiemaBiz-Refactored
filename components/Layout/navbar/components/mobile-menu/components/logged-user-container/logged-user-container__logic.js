import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

import { logoutUser } from '../../../../../../../Redux/actions'

const LoggedUserContainerLogicLayer = ({ render }) => {

  const languageSource = useSelector( state => state.language.source );
  const loggedUser = useSelector( state => state.user.username);

  const dispatch = useDispatch();

  return render({
    languageSource,
    loggedUser,
    logout: () => dispatch( logoutUser() )
  })
}

LoggedUserContainerLogicLayer.propTypes = {
  render: PropTypes.func.isRequired
}

export default LoggedUserContainerLogicLayer