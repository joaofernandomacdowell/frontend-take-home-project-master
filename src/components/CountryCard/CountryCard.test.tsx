import React from 'react';
import { Provider } from 'react-redux';

import { cleanup, render } from '@testing-library/react';
import CountryCard from './CountryCard';
import countriesMock from '../../redux/actions/mocks/countriesMock';

import store from '../../redux/store';

const countryCard = render(
  <Provider store={store}>
    <CountryCard country={countriesMock[0]} />
  </Provider>
);

describe('CountryCard', () => {
  describe('snapshot', () => {
    test('Should match render snapshot', () => {
      expect(countryCard).toMatchSnapshot();
    });
  });
});
