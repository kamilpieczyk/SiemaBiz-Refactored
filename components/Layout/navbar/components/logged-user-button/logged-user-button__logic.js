import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'

const LoggedUserButtonLogic = ({ render }) => {

  const username = useSelector( state => state.user.username )

  return render({
    username
  })
}

LoggedUserButtonLogic.PropTypes = {
  render: PropTypes.func.isRequired
}

export default LoggedUserButtonLogic;