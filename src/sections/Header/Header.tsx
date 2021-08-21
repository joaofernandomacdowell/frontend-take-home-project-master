import React from 'react';

import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Countries Rest API</h1>
      </header>
    </>
  );
};

export default Header;
