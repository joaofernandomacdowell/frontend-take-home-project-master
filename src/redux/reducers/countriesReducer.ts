import {
  CountriesState,
  FETCH_COUNTRIES_BEGIN,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  CountriesActionTypes,
} from '../types';

const INITIAL_STATE: CountriesState = {
  isFetching: false,
  hasError: false,
  countries: [],
};

const countriesReducer = (
  state: CountriesState = INITIAL_STATE,
  action: CountriesActionTypes
): CountriesState => {
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
        isFetching: false,
        hasError: false,
        countries: action.payload,
      };
    case FETCH_COUNTRIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        meta: { errorMessage: action.payload },
      };
    default:
      return state;
  }
};

export default countriesReducer;
