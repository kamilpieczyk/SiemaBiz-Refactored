export default ( state = false, action ) => {
  switch( action.type ){
    case 'SET_MENU_ACTIVE':
      state = true
      return state;
    case 'SET_MENU_INACTIVE':
      state = false
      return state;
    default:
      return state;
  }
}