/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { throttle } from 'lodash';

import { loadState, saveState } from '../localStorage/localStorage';

import rootReducer from './reducers';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const persistedState = loadState();

const store = createStore(
  rootReducer,
  persistedState,
  composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(
  throttle(() => {
    saveState({
      countriesState: store.getState().countriesState,
    });
  }, 1000)
);

export type AppState = ReturnType<typeof rootReducer>;

export default store;
