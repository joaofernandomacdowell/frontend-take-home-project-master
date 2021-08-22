import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { Country } from '../../api/types';
import Details from './children/Details';
import Flag from './children/Flag';

import styles from './CountryCard.module.scss';

interface CountryCardProps {
  country: Country;
}

const CountryCard = ({ country }: CountryCardProps): JSX.Element => {
  return (
    <article className={styles.card}>
      <Link to={`/country/${country.name}`}>
        <Flag imageUrl={country.flag} alt={country.name} />
        <div className={styles.cardDetails}>
          <h3 className={styles.countryName}>{country.name}</h3>
          <Details
            details={{
              Population: country.population.toLocaleString(),
              Region: country.region,
              Capital: country.capital,
            }}
          />
        </div>
      </Link>
    </article>
  );
};

export default memo(CountryCard);
