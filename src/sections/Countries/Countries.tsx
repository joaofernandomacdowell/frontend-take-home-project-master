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
  isFetching: boolean;
  hasError: boolean;
  countries: Country[];
  fetchAllCountries: () => void;
  searchText: string;
}

const Countries = ({
  isFetching,
  hasError,
  countries,
  fetchAllCountries,
  searchText,
}: CountriesProps): JSX.Element => {
  useEffect(() => {
    fetchAllCountries();
  }, [fetchAllCountries]);

  useEffect(() => {
    console.log('useEffect', searchText);
  }, [searchText]);

  if (hasError) {
    return <h2>Error Page</h2>;
  }

  return isFetching && countries.length === 0 ? (
    <h2>isFetching...</h2>
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
  isFetching: state.countries.isFetching,
  hasError: state.countries.hasError,
  countries: state.countries.countries,
  searchText: state.searchText.text,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  fetchAllCountries: fetchCountries(dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Countries);
