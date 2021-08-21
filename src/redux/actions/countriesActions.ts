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
// export const fetchCountries =
//   // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
//   (dispatch: Dispatch) => async (countryName: string) => {
//     dispatch(fetchCountriesBegin());
//     try {
//       const countries = await fetchCountriesApi(countryName);
//       dispatch(fetchCountriesSuccess(countries));
//     } catch (err) {
//       dispatch(fetchCountriesFailure(err));
//     }
//   };

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

// export function fetchCountries() {
//   return (dispatch: Dispatch): any => {
//     dispatch(fetchCountriesBegin());
//     return fetch('restcountries.eu/rest/v2')
//       .then((res) => res.json())
//       .then((countries) => {
//         dispatch(fetchCountriesSuccess(countries));
//         return countries;
//       })
//       .catch((error) => dispatch(fetchCountriesFailure(error)));
//   };
// }
