import {
  FETCH_COUNTRIES_BEGIN,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  CountriesActionTypes,
} from '../types';

import { Country } from '../../api/types';

// State
interface State {
  isFetching: boolean;
  hasError: boolean;
  countries: Country[];
  meta?: {
    errorMessage?: string;
  };
}

const INITIAL_STATE: State = {
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
        meta: { errorMessage: action.payload },
      };
    default:
      return state;
  }
};

export default countriesReducer;
