/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createStore } from 'redux';

import rootReducer from './reducers';

const initialState = {
  allCountries: {
    isFetching: false,
    hasError: false,
    countries: [],
  },
};

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, initialState);

export default store;
