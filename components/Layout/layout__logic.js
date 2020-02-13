import { PureComponent } from 'react'
import { connect } from 'react-redux'
import Cookies from 'js-cookie'

import { loginUser } from '../../Redux/actions'
import authorisation from '../../API/authorisation'

class LayoutLogic extends PureComponent{

  checkIfUserIsLogged = async () => {
    const passport = Cookies.get( 'passport' )
    if( passport ){
      const user = await authorisation( passport )
      if( user ){
        this.props.login({
          username: user.username,
          privileges: user.privileges,
          email: user.email,
          name: user.name,
          surname: user.surname,
          phone: user.phone,
          id: user.id
        })
      }
    }
  }

  componentDidMount(){
    this.checkIfUserIsLogged()
  }
  
  render(){
    return this.props.render({

    })
  }
}

export default connect(
  state => ({
    user: state.user
  }),
  dispatch => ({
    login: user => dispatch( loginUser( user ) )
  })
)(LayoutLogic)