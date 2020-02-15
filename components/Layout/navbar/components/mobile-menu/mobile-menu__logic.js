import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const MobileMenuLogicLayer = ({ render }) => {
  
  const isPageScrolled = useSelector( state => state.isPageScrolled );
  const menuItems = useSelector( state => state.language.source.menu );
  const isUserLogged = useSelector( state => state.user.username );
  
  return render({
    isPageScrolled,
    menuItems,
    isUserLogged
  })
}

MobileMenuLogicLayer.propTypes = {
  render: PropTypes.func.isRequired
}

export default MobileMenuLogicLayer