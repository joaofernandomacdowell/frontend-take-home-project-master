import React, { memo, useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import styles from './Countries.module.scss';

import { Country } from '../../api/types';
import { fetchCountries } from '../../redux/actions/countriesActions';
import { AppState } from '../../redux/store';

import CountryCard from '../../components/CountryCard';
import Pagination from '../../components/Pagination';
import Loading from '../../components/Loading';
import NotFound from '../../components/NotFound';

interface CountriesProps {
  isFetching: boolean;
  hasError: boolean;
  countries: Country[];
  // fetchAllCountries: (countryName?: string) => void;
  searchText: string;
}

const ITEMS_PER_PAGE = 20;

const Countries = ({
  isFetching,
  hasError,
  countries,
  // fetchAllCountries,
  searchText,
}: CountriesProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(ITEMS_PER_PAGE);
  const dispatch = useDispatch();

  // Execute once the componente renders the first time (componentDidMount like)
  useEffect(() => {
    dispatch(fetchCountries());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Execute when input searchText has changed
  useEffect(() => {
    dispatch(fetchCountries(searchText));
  }, [dispatch, searchText]);

  if (hasError) {
    return <NotFound searchTerm={searchText} />;
  }

  if (isFetching && countries.length === 0) {
    return <Loading />;
  }

  const indexOfLastCountry = currentPage * itemsPerPage;
  const indexOfFirstCountry = indexOfLastCountry - itemsPerPage;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <section className={styles.container}>
        {currentCountries.map((country: Country) => (
          <CountryCard key={country.numericCode} country={country} />
        ))}
      </section>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={countries.length}
        paginate={paginate}
      />
    </>
  );
};

const mapStateToProps = (state: AppState) => ({
  isFetching: state.countries.isFetching,
  hasError: state.countries.hasError,
  countries: state.countries.countries,
  searchText: state.searchText.text,
});

export default connect(mapStateToProps)(memo(Countries));
