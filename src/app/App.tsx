import React from 'react';
import Countries from '../pages/Countries';
import styles from './App.module.scss';

const App = (): JSX.Element => (
  <div className={styles.App}>
    <Countries />
  </div>
);

export default App;
