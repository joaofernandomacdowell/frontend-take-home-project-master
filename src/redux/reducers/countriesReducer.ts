import {
  FETCH_COUNTRIES_BEGIN,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  CountriesActionTypes,
  State,
} from '../types';

const INITIAL_STATE = {
  isFetching: false,
  hasError: false,
  countries: [],
};

const countriesReducer = (
  state: State = INITIAL_STATE,
  action: CountriesActionTypes
): State => {
  switch (action.type) {
    case FETCH_COUNTRIES_BEGIN:
      return {
        isFetching: true,
        hasError: false,
        countries: [],
      };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        ...state,
        isFetching: true,
        hasError: false,
        countries: action.payload,
      };
    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true,
      };
    default:
      return state;
  }
};

export default countriesReducer;
