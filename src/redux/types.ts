import { Country } from '../api/types';

// Actions
export const FETCH_COUNTRIES_BEGIN = 'FETCH_COUNTRIES_BEGIN';
export const FETCH_COUNTRIES_SUCCESS = 'FETCH_COUNTRIES_SUCCESS';
export const FETCH_COUNTRIES_FAILURE = 'FETCH_COUNTRIES_FAILURE';

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

// State
export interface State {
  isFetching: boolean;
  hasError: boolean;
  countries: Country[];
  meta?: {
    country?: string;
    errorMessage?: string;
  };
}

export type CountriesActionTypes =
  | FetchCountriesBeginAction
  | FetchCountriesSucceededAction
  | FetchCountriesFailedAction;
