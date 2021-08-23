import React, { useEffect, useRef, useState } from 'react';

import useDebounce from '../../hooks/useDebounce';
import styles from './Search.module.scss';

import { Container, Row } from '../Grid';

interface SearchProps {
  text: string;
  onChange: (value: React.SetStateAction<string>) => void;
}

const Search = ({ text, onChange }: SearchProps): JSX.Element => {
  const debouncedChange = useDebounce(onChange, 500);
  const inputRef = useRef<HTMLInputElement>();
  const [searchText, setSearchText] = useState(text);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
    debouncedChange(e.target.value);
  };

  return (
    <Container>
      <Row>
        <section className={styles.search}>
          <input
            ref={inputRef}
            className={styles.searchInput}
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
