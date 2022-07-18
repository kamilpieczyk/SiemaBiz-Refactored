import pl from '../../languages/pl';
import en from '../../languages/eng';

export default (
  state = {
    current: 'PL',
    source: pl,
  },
  action
) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE_TO_PL':
      state = {
        ...state,
        current: 'PL',
        source: pl,
      };
      return state;

    case 'CHANGE_LANGUAGE_TO_ENG':
      state = {
        ...state,
        current: 'EN',
        source: en,
      };
      return state;

    default:
      return state;
  }
};
