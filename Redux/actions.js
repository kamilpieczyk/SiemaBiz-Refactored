// Language actions

export const changeLanguageToPL = () => {
  return {
    type: 'CHANGE_LANGUAGE_TO_PL'
  }
}

export const changeLanguageToENG = () => {
  return {
    type: 'CHANGE_LANGUAGE_TO_ENG'
  }
}

// Global menu actions

export const setMenuActive = () => ({
  type: 'SET_MENU_ACTIVE'
})

export const setMenuInactive = () => ({
  type: 'SET_MENU_INACTIVE'
})

// User menu actions

export const setUserMenuActive = () => ({
  type: 'SET_USERMENU_ACTIVE'
})

export const setUserMenuInactive = () => ({
  type: 'SET_USERMENU_INACTIVE'
})

// Scroll action

export const setScroll = ( bool ) => ({
  type: 'SET_SCROLL',
  payload: bool
})

// login system actions

export const loginUser = ({
  username,
  privileges,
  email,
  name,
  surname,
  phone,
  id
}) => ({
  type: 'LOGIN',
  payload: {
    username,
    privileges,
    email,
    name,
    surname,
    phone,
    id
  }
})

export const logoutUser = () => ({
  type: 'LOGOUT'
})

// Screen resolution actions

export const setScreenResolutionToDesktop = () => ({
  type: 'SET_SCREEN_RESOLUTION_TO_DESKTOP'
})

export const setScreenResolutionToMobile = () => ({
  type: 'SET_SCREEN_RESOLUTION_TO_MOBILE'
})


// POPUP window actions

export const setPopupWindowActive = ({ title, message }) => ({
  type: 'SET_POPUP_WINDOW_ACTIVE',
  payload: { title, messenge }
})

export const setPopupWindowInactive = () => ({
  type: 'SET_POPUP_WINDOW_INACTIVE'
})