/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers';

const initialState = {
  countries: {
    isFetching: false,
    hasError: false,
    countries: [],
  },
  searchText: {
    text: '',
  },
};

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
