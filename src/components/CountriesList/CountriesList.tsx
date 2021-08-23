import React from 'react';
import { useSelector } from 'react-redux';

import { Country } from '../../api/types';
import { AppState } from '../../redux/store';
import CountryCard from '../CountryCard';
import Loading from '../Loading';
import NotFound from '../NotFound';

import styles from './CountriesList.module.scss';

interface CountriesListProps {
  countries: Country[];
}

const CountriesList = ({
  countries,
}: CountriesListProps): JSX.Element => {
  const { hasError, isFetching } = useSelector(
    (state: AppState) => state.countriesState
  );
  const { text } = useSelector(
    (state: AppState) => state.searchState
  );

  if (hasError) {
    return <NotFound searchTerm={text} />;
  }

  if (isFetching && countries.length === 0) {
    return <Loading />;
  }

  return (
    <section className={styles.countriesList}>
      {countries.map((country: Country) => (
        <CountryCard key={country.alpha3Code} country={country} />
      ))}
    </section>
  );
};

export default CountriesList;
