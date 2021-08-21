import { SetSearchCountryAction, SET_SEARCH_COUNTRY } from '../types';

interface State {
  text: string;
}

const INITIAL_STATE: State = {
  text: '',
};

const searchReducer = (
  state: State = INITIAL_STATE,
  action: SetSearchCountryAction
): State => {
  switch (action.type) {
    case SET_SEARCH_COUNTRY:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
