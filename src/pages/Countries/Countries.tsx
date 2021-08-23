import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';

import { AppState } from '../../redux/store';

import Pagination from '../../components/Pagination';
import Search from '../../components/Search';
import CountriesList from '../../components/CountriesList';
import { setSearchCountry } from '../../redux/actions/searchActions';
import { Country } from '../../api/types';

const ITEMS_PER_PAGE = 20;

interface CountriesProps {
  filteredCountries: Country[];
}

const Countries = ({
  filteredCountries,
}: CountriesProps): JSX.Element => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [text, setText] = useState('');

  // Execute when input searchText has changed
  useEffect(() => {
    dispatch(setSearchCountry(text));
  }, [dispatch, text]);

  const indexOfLastCountry = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstCountry = indexOfLastCountry - ITEMS_PER_PAGE;
  const currentCountries = filteredCountries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  console.log('filteredCountries: ', filteredCountries);
  console.log('currentCountries: ', currentCountries);
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
        totalItems={filteredCountries.length}
        paginate={paginate}
      />
    </>
  );
};

const filterFn = (countries: Country[], text: string) =>
  countries.filter((country) => {
    if (
      country.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
    ) {
      return country;
    }

    return false;
  });

const mapStateToProps = ({
  countriesState,
  searchState,
}: AppState) => {
  const { countries } = countriesState;
  const { text } = searchState;

  return {
    filteredCountries: filterFn(countries, text),
  };
};

export default connect(mapStateToProps)(Countries);
