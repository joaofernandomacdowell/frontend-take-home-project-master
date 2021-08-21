import React, { memo } from 'react';

import { Country } from '../../api/types';
import Details from './children/Details';
import Flag from './children/Flag';

import styles from './CountryCard.module.scss';

interface CountryCardProps {
  country: Country;
}

// increase details object props
const CountryCard = ({ country }: CountryCardProps): JSX.Element => (
  <article className={styles.card}>
    <Flag imageUrl={country.flag} alt={country.name} />
    <Details
      name={country.name}
      details={{
        Population: country.population.toLocaleString(),
        Region: country.region,
        Capital: country.capital,
      }}
    />
  </article>
);

export default memo(CountryCard);
