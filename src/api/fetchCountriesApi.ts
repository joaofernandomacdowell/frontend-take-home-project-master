import fetchJSON from './fetchJSON';
import { Country } from './types';

const COUNTRIES_API_ENDPOINT = 'restcountries.eu/rest/v2';

const fetchCountries = async (
  countryName?: string
): Promise<Country[]> => {
  const baseUrl = `https://${COUNTRIES_API_ENDPOINT}`;
  const finalUrl = countryName
    ? `${baseUrl}/name/${countryName}`
    : `${baseUrl}/all`;

  return fetchJSON<Country[]>(finalUrl);
};

export default fetchCountries;
