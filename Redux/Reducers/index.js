import { combineReducers } from 'redux'

import language from './language.reducer'
import globalMenu from './menu.reducer'
import scroll from './scroll.reducer'
import user from './user.reducer'

export default combineReducers( {
  language,
  globalMenu,
  isPageScrolled: scroll,
  user
} )