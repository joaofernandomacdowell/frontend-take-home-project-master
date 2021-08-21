import { Country } from '../api/types';

// Actions
export const FETCH_COUNTRIES_BEGIN = 'FETCH_COUNTRIES_BEGIN';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE';
export const SET_SEARCH_COUNTRY = 'SET_SEARCH_COUNTRY';

// Action Types
export interface FetchCountriesBeginAction {
  type: typeof FETCH_COUNTRIES_BEGIN;
}

export interface FetchCountriesSucceededAction {
  type: typeof FETCH_COUNTRIES_SUCCESS;
  payload: Country[];
}

export interface FetchCountriesFailedAction {
  type: typeof FETCH_COUNTRIES_FAILURE;
  payload: string;
}

export interface SetSearchCountryAction {
  type: typeof SET_SEARCH_COUNTRY;
  payload: string;
}

export type CountriesActionTypes =
  | FetchCountriesBeginAction
  | FetchCountriesSucceededAction
  | FetchCountriesFailedAction;
