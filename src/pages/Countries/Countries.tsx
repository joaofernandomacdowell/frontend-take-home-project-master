import React, { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchCountries } from '../../redux/actions/countriesActions';
import { AppState } from '../../redux/store';

import Pagination from '../../components/Pagination';
import Search from '../../components/Search';
import CountriesList from '../../components/CountriesList';
import { setSearchCountry } from '../../redux/actions/searchActions';

const ITEMS_PER_PAGE = 20;

const Countries = (): JSX.Element => {
  const countries = useSelector(
    (state: AppState) => state.countriesState.countries
  );
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [text, setText] = useState('');

  // Execute when input searchText has changed
  useEffect(() => {
    dispatch(setSearchCountry(text));
    dispatch(fetchCountries(text));
  }, [dispatch, text]);

  const indexOfLastCountry = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstCountry = indexOfLastCountry - ITEMS_PER_PAGE;
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
      <CountriesList countries={currentCountries} />
      <Pagination
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={countries.length}
        paginate={paginate}
      />
    </>
  );
};

export default memo(Countries);
