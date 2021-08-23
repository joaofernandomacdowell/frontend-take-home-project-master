import fetchJSON from './fetchJSON';
import { Country } from './types';

const COUNTRIES_API_ENDPOINT = 'restcountries.eu/rest/v2';

const fetchCountriesApi = async (
  countryName?: string
): Promise<Country[]> => {
  const baseUrl = `https://${COUNTRIES_API_ENDPOINT}`;
  const fields =
    'alpha3Code;name;capital;region;population;flag;subregion;nativeName;currencies;languages';
  const finalUrl = countryName
    ? `${baseUrl}/name/${countryName}?fields=${fields}`
    : `${baseUrl}/all?fields=${fields}`;

  return fetchJSON<Country[]>(finalUrl);
};

export default fetchCountriesApi;
