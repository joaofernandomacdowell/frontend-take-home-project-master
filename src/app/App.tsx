import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import { Header, Countries } from '../sections';

const App = (): JSX.Element => (
  <>
    <Header />
    <main>
      <Router>
        <Switch>
          <Route path="/" exact component={Countries} />
          {/* <Route path="/country/:countryCode" exact component={Country} />
          <Route component={NotFound} /> */}
        </Switch>
      </Router>
    </main>
  </>
);

export default App;
