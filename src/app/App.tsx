import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from '../components/Header';
import Search from '../components/Search';

import Countries from '../pages/Countries';
import CountryProfile from '../pages/CountryProfile';

import styles from './App.module.scss';

const App = (): JSX.Element => (
  <>
    <Header />
    <main className={styles.container}>
      <Search />
      <Router>
        <Switch>
          <Route path="/" exact component={Countries} />
          <Route
            path="/country/:countryCode"
            exact
            component={CountryProfile}
          />
        </Switch>
      </Router>
    </main>
  </>
);

export default App;
