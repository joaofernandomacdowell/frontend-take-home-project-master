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

const fetchCountriesBegin = (): FetchCountriesBeginAction => ({
  type: FETCH_COUNTRIES_BEGIN,
});

const fetchCountriesSuccess = (
  countries: Country[]
): FetchCountriesSucceededAction => ({
  type: FETCH_COUNTRIES_SUCCESS,
  payload: countries,
});

const fetchCountriesFailure = (
  error: Error
): FetchCountriesFailedAction => ({
  type: FETCH_COUNTRIES_FAILURE,
  payload: error.message,
});

export const fetchCountries = (countryName?: string) => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(fetchCountriesBegin());
    try {
      const countries = await fetchCountriesApi(countryName);
      dispatch(fetchCountriesSuccess(countries));
    } catch (err) {
      dispatch(fetchCountriesFailure(err));
    }
  };
};
