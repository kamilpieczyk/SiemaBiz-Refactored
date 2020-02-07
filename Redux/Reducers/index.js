import { combineReducers } from 'redux'

import language from './language.reducer'
import globalMenu from './menu.reducer'

export default combineReducers( {
  language,
  globalMenu
} )