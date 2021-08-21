import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import styles from './Countries.module.scss';

import Search from '../Search';

import CountryCard from '../../components/CountryCard';
import { Country } from '../../api/types';
import { fetchCountries } from '../../redux/actions/countriesActions';
import { AppState } from '../../redux/store';

interface CountriesProps {
  countries: Country[];
  fetchAllCountries: () => void;
  loading: boolean;
}

const Countries = ({
  loading,
  countries,
  fetchAllCountries,
}: CountriesProps): JSX.Element => {
  useEffect(() => {
    fetchAllCountries();
  }, [fetchAllCountries]);

  return loading && countries.length === 0 ? (
    <h2>Loading...</h2>
  ) : (
    <>
      <Search />
      <section className={styles.container}>
        {countries.map((country: Country) => (
          <CountryCard key={country.numericCode} country={country} />
        ))}
      </section>
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  loading: state.allCountries.isFetching,
  countries: state.allCountries.countries,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchAllCountries: fetchCountries(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
