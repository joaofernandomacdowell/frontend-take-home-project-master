import { combineReducers } from 'redux';

import countriesReducer from './countriesReducer';

const reducers = combineReducers({
  allCountries: countriesReducer,
});

export default reducers;
