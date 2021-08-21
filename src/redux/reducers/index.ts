import { combineReducers } from 'redux';

import countriesReducer from './countriesReducer';
import searchReducer from './searchReducer';

export default combineReducers({
  countries: countriesReducer,
  searchText: searchReducer,
});
