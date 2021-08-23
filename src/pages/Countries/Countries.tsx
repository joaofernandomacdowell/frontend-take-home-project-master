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
  countries: Country[];
}

const filterFn = (countries: Country[], text: string) =>
  countries.filter((country) => {
    if (
      country.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
    ) {
      return country;
    }

    return false;
  });

const Countries = ({ countries }: CountriesProps): JSX.Element => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [text, setText] = useState('');

  const indexOfLastCountry = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstCountry = indexOfLastCountry - ITEMS_PER_PAGE;
  const currentCountries = countries.slice(
    indexOfFirstCountry,
    indexOfLastCountry
  );

  const [filtered, setFiltered] = useState(currentCountries);

  // Execute when input searchText has changed
  useEffect(() => {
    console.log('useEffect');
    dispatch(setSearchCountry(text.trim()));
    setFiltered(filterFn(countries, text));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Search
        text={text}
        onChange={(searchTerm: string) => setText(searchTerm)}
      />
      <CountriesList
        countries={
          filtered.length === countries.length
            ? currentCountries
            : filtered
        }
      />
      <Pagination
        itemsPerPage={ITEMS_PER_PAGE}
        totalItems={filtered.length}
        paginate={paginate}
      />
    </>
  );
};

const mapStateToProps = ({ countriesState }: AppState) => {
  const { countries } = countriesState;

  return {
    countries,
  };
};

export default connect(mapStateToProps)(Countries);
