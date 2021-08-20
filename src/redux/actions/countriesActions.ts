import { Dispatch } from 'redux';
import {
  FETCH_COUNTRIES_BEGIN,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_FAILURE,
  FetchCountriesBeginAction,
  FetchCountriesSucceededAction,
  FetchCountriesFailedAction,
} from '../types';

import { Country } from '../../api/types';
import fetchCountriesApi from '../../api/fetchCountriesApi';

export const fetchCountriesBegin = (): FetchCountriesBeginAction => ({
  type: FETCH_COUNTRIES_BEGIN,
});

export const fetchCountriesSuccess = (
  countries: Country[]
): FetchCountriesSucceededAction => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countries,
});

export const fetchCountriesFailure = (
  error: Error
): FetchCountriesFailedAction => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload: error.message,
});

// Side Effects
export const fetchCountries =
  (dispatch: Dispatch) => async (): Promise<void> => {
    dispatch(fetchCountriesBegin());
    try {
      const countries = await fetchCountriesApi();
      dispatch(fetchCountriesSuccess(countries));
    } catch (err) {
      dispatch(fetchCountriesFailure(err));
    }
  };
