export default (state = 'desktop', action) => {
  switch (action.type) {
    case 'SET_SCREEN_RESOLUTION_TO_DESKTOP':
      state = 'desktop';
      return state;
    case 'SET_SCREEN_RESOLUTION_TO_MOBILE':
      state = 'mobile';
      return state;
    default:
      return state;
  }
};
