import fetchJSON from './fetchJSON';

const COUNTRIES_API_ENDPOINT = 'restcountries.eu/rest/v2';

const fetchCountries = async <T>(countryName?: string): Promise<T> => {
  const baseUrl = `https://${COUNTRIES_API_ENDPOINT}`;
  const finalUrl = countryName
    ? `${baseUrl}/name/${countryName}`
    : `${baseUrl}/all`;

  return fetchJSON<T>(finalUrl);
};

export default fetchCountries;
