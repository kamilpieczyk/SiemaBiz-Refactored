export default (state = false, { type, payload }) => {
  switch (type) {
    case 'SET_REGISTER_WINDOW':
      state = payload;
      return state;
    default:
      return state;
  }
};
