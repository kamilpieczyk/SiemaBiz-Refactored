export default (state = false, { type, payload }) => {
  switch (type) {
    case 'SET_GLOBAL_LOADING_ACTIVE':
      state = true;
      return state;

    case 'SET_GLOBAL_LOADING_INACTIVE':
      state = false;
      return state;

    default:
      return state;
  }
};
