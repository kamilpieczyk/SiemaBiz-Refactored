const initState = {
  isActive: false,
  title: '',
  messenge: ''
}

export default ( state = initState, { type, payload } ) => {
  switch( type ){

    case 'SET_POPUP_WINDOW_ACTIVE':
      state = {
        ...state,
        isActive: true,
        title: payload.title,
        messenge: payload.messenge
      }
    return state
    
    case 'SET_POPUP_WINDOW_INACTIVE':
      state = initState
      return state

    default:
      return state

  }
}