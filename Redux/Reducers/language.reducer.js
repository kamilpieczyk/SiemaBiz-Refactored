export default ( state = 'PL', action ) => {

  switch( action.type ){

    case 'CHANGE_LANGUAGE_TO_PL':
      state = 'PL'
      return state;
    
    case 'CHANGE_LANGUAGE_TO_ENG':
      state = 'EN'
      return state;
    
    default: return state

  }
}