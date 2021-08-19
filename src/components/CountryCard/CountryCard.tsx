import React from 'react';

import { Country } from '../../api/types';
import Details from './children/Details';
import Flag from './children/Flag';

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps): JSX.Element => (
  <article>
    <Flag imageUrl={country.flag} alt={country.name} />
    <Details
      name={country.name}
      details={{
        Population: country.population,
        Region: country.region,
        Capital: country.capital,
      }}
    />
  </article>
);

export default CountryCard;
