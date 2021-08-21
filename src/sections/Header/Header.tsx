import React from 'react';

import styles from './Header.module.scss';
import Grid from '../../components/Grid';

const Header = (): JSX.Element => {
  return (
    <>
      <header className={styles.header}>
        <Grid type="container">
          <Grid type="row">
            <h1 className={styles.title}>Countries Rest API</h1>
          </Grid>
        </Grid>
      </header>
    </>
  );
};

export default Header;
