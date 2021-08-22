import { combineReducers } from 'redux';

import countriesReducer from './countriesReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  countriesState: countriesReducer,
  searchState: searchReducer,
});
