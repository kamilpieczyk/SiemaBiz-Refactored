export default (state = false, action) => {
  switch (action.type) {
    case 'SET_USERMENU_ACTIVE':
      state = true;
      return state;
    case 'SET_USERMENU_INACTIVE':
      state = false;
      return state;
    default:
      return state;
  }
};
