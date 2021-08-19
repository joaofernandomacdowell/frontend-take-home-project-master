import { format } from 'prettier';
import React from 'react';

import styles from './Search.module.scss';

const Search = (): JSX.Element => {
  return (
    <section className={styles.search}>
      <form className={styles.form}>
        <input
          className={styles.searchBar}
          type="search"
          name="search"
          id="search"
          placeholder="Search for a country"
        />
      </form>
    </section>
  );
};

export default Search;
