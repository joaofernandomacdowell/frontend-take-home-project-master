import { SetSearchCountryAction, SET_SEARCH_COUNTRY } from '../types';

export const setSearchCountry = (
  text: string
): SetSearchCountryAction => ({
  type: SET_SEARCH_COUNTRY,
  payload: text,
});
