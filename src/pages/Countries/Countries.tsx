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
import Search from '../../components/Search';

interface CountriesProps {
  isFetching: boolean;
  hasError: boolean;
  countries: Country[];
}

const ITEMS_PER_PAGE = 20;

const Countries = ({
  isFetching,
  hasError,
  countries,
}: CountriesProps): JSX.Element => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(ITEMS_PER_PAGE);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  // Execute when input searchText has changed
  useEffect(() => {
    dispatch(fetchCountries(text));
  }, [dispatch, text]);

  if (hasError) {
    return <NotFound searchTerm={text} />;
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
      <Search
        text={text}
        onChange={(searchTerm: string) => setText(searchTerm)}
      />
      <section className={styles.countriesList}>
        {currentCountries.map((country: Country) => (
          <CountryCard key={country.alpha3Code} country={country} />
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

const mapStateToProps = ({ countriesState }: AppState) => ({
  isFetching: countriesState.isFetching,
  hasError: countriesState.hasError,
  countries: countriesState.countries,
});

export default connect(mapStateToProps)(memo(Countries));
