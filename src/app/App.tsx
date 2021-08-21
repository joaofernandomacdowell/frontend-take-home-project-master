import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Header, Countries, Search } from '../sections';
import styles from './App.module.scss';

const App = (): JSX.Element => (
  <>
    <Header />
    <main className={styles.container}>
      <Search />
      <Router>
        <Switch>
          <Route path="/" exact component={Countries} />
        </Switch>
      </Router>
    </main>
  </>
);

export default App;
