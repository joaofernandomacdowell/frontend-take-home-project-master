import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Header from '../components/Header';

import Countries from '../pages/Countries';
import CountryProfile from '../pages/CountryProfile';
import { fetchCountries } from '../redux/actions/countriesActions';

import styles from './App.module.scss';

import store from '../redux/store';

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  const { countriesState } = store.getState();

  useEffect(() => {
    if (!countriesState.countries.length) {
      dispatch(fetchCountries());
    }

    // Eslint rule to avoid passing dispatch as a useEffect dependency
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <main className={styles.container}>
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
};

export default App;
