import React, { useState } from 'react';

import useDebounce from '../../hooks/useDebounce';
import styles from './Search.module.scss';

interface SearchProps {
  value: string;
  onChange: (text: string) => void;
}

const Search = ({ value, onChange }: SearchProps): JSX.Element => {
  const [displayValue, setDisplayValue] = useState(value);
  const debounceChange = useDebounce(onChange, 500);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDisplayValue(e.target.value);
    debounceChange(e.target.value);
  };

  return (
    <section className={styles.search}>
      <input
        className={styles.searchBar}
        type="search"
        name="search"
        id="search"
        value={displayValue}
        onChange={handleInputChange}
        placeholder="Search for a country"
      />
    </section>
  );
};

export default Search;
