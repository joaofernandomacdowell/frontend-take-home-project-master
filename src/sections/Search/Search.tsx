import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

// import useDebounce from '../../hooks/useDebounce';
import styles from './Search.module.scss';
import { setSearchCountry } from '../../redux/actions/searchActions';

import { Container, Row } from '../../components/Grid';

const Search = (): JSX.Element => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    dispatch(setSearchCountry(searchText));
  }, [searchText, dispatch]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    e.preventDefault();
  };

  return (
    <Container>
      <Row>
        <section className={styles.search}>
          <input
            className={styles.searchBar}
            type="search"
            name="search"
            id="search"
            value={searchText}
            onChange={handleOnChange}
            placeholder="Search for a country"
          />
        </section>
      </Row>
    </Container>
  );
};

export default Search;
