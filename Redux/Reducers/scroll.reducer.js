export default ( state = false, action ) =>{

  switch( action.type ){

    case 'SET_SCROLL':
      state = action.payload;
      return state

    default:
      return state
  }

}