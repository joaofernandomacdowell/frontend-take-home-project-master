import React from 'react';

import styles from './Header.module.scss';

const Header = (): JSX.Element => {
  return (
    <>
      <header className={styles.header}>
        <div>
          <h1>Countries</h1>
        </div>
      </header>
    </>
  );
};

export default Header;
