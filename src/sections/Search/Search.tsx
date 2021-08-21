import React, { useState } from 'react';

// import useDebounce from '../../hooks/useDebounce';
import styles from './Search.module.scss';

const Search = (): JSX.Element => {
  const [searchText, setsearchText] = useState<string>('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setsearchText(e.target.value);
  };

  return (
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
  );
};

export default Search;
