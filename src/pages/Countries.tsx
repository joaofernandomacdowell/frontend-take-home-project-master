import React, { useState, useEffect } from 'react';

import CountryCard from '../components/CountryCard';
import { Country } from '../api/types';
import fetchCountries from '../api/fetchCountries';

const Countries = (): JSX.Element => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountryApiData = async (
      setter: React.Dispatch<React.SetStateAction<Country[]>>
    ) => {
      try {
        const data: Country[] = await fetchCountries();

        if (data.length > 0) {
          setter(data);
          console.log(data);
        }
      } catch (err) {
        throw Error(err);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    fetchCountryApiData(setCountries);
  }, []);

  return (
    <>
      <section className="grid">
        {countries.map((country: Country) => (
          <CountryCard key={country.numericCode} country={country} />
        ))}
      </section>
    </>
  );
};

export default Countries;
