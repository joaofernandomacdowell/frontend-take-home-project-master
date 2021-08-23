import {
  SearchState,
  SetSearchCountryAction,
  SET_SEARCH_COUNTRY,
} from '../types';

const INITIAL_STATE: SearchState = {
  text: '',
};

const searchReducer = (
  state: SearchState = INITIAL_STATE,
  action: SetSearchCountryAction
): SearchState => {
  switch (action.type) {
    case SET_SEARCH_COUNTRY:
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
