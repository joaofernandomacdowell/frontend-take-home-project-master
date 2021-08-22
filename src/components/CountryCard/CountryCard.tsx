import React, { memo, MouseEventHandler } from 'react';

import { Country } from '../../api/types';
import Details from './children/Details';
import Flag from './children/Flag';

import useToggle from '../../hooks/useToggle';

import styles from './CountryCard.module.scss';

interface CountryCardProps {
  country: Country;
}

// increase details object props
const CountryCard = ({ country }: CountryCardProps): JSX.Element => {
  const [open, setToggle] = useToggle();

  return (
    <article className={styles.card}>
      <a
        href={`#${country.name}`}
        onClick={setToggle as MouseEventHandler<HTMLAnchorElement>}
      >
        <Flag imageUrl={country.flag} alt={country.name} />
        <div className={styles.cardDetails}>
          <h3 className={styles.countryName}>{country.name}</h3>
          <Details
            details={{
              Population: country.population.toLocaleString(),
              Region: country.region,
              Capital: country.capital,
            }}
            shouldOpen={open}
          />
        </div>
      </a>
    </article>
  );
};

export default memo(CountryCard);
