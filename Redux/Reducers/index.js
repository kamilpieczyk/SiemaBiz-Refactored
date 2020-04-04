import { combineReducers } from 'redux'

import language from './language.reducer'
import globalMenu from './menu.reducer'
import scroll from './scroll.reducer'
import user from './user.reducer'
import userMenu from './user-menu.reducer'
import deviceScreen from './device.reducer'
import popup from './popup.reducer'
import choiceWindow from './choice-window.reducer'
import articles from './articles.reducer'

export default combineReducers( {
  language,
  globalMenu,
  isPageScrolled: scroll,
  user,
  isUserMenuActiv: userMenu,
  deviceScreen,
  popup,
  choiceWindow,
  articles
} )