const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ARTICLES':
      state = {
        ...state,
        data: action.payload.articles,
      };
      return state;

    default:
      return state;
  }
};
