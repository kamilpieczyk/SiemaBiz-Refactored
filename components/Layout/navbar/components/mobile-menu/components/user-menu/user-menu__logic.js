import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const UserMenuLogicLayer = ({ render }) => {
  const userMenu = useSelector(s => s.language.source.navbar.usermenu);

  return render({
    userMenu,
  });
};

UserMenuLogicLayer.propTypes = {
  render: PropTypes.func.isRequired,
};

export default UserMenuLogicLayer;
