import React, { useState } from 'react';
import Search from '../Search';

import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  const [text, setText] = useState('');

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Countries Rest API</h1>
        <Search value={text} onChange={(search) => setText(search)} />
      </header>
    </>
  );
};

export default Header;
