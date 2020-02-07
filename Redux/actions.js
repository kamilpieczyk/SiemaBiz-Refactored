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