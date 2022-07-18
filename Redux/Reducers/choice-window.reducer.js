const initialState = {
  active: false,
  question: '',
  yesFunction: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHOICE_WINDOW_ACTIVE':
      state = {
        ...state,
        active: true,
        yesFunction: action.payload.yesFunction,
        question: action.payload.question,
      };
      return state;
    case 'SET_CHOICE_WINDOW_INACTIVE':
      state = initialState;
      return state;
    default:
      return state;
  }
};
