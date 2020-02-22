import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'

const ProfileSettingsLogicLayer = ({ render }) => {

  const username = useSelector( s => s.user.username );
  const email = useSelector( s => s.user.email );
  const name = useSelector( s => s.user.name );
  const surname = useSelector( s => s.user.surname );
  const phone = useSelector( s => s.user.phone );
  const language = useSelector( s => s.language.source );

  const breadcrumbs = [ language.userPanel.title ];
  
  return render({
    breadcrumbs,
    username,
    email,
    name,
    surname,
    phone
  })
}

ProfileSettingsLogicLayer.propTypes = {

}

export default ProfileSettingsLogicLayer