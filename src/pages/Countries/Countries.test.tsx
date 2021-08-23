/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { Provider } from 'react-redux';

import { cleanup, render } from '@testing-library/react';
import Countries, { filterFn } from './Countries';
import countriesMock from '../../redux/actions/mocks/countriesMock';

import store from '../../redux/store';

afterEach(cleanup);

describe('Countries', () => {
  describe('snapshot', () => {
    test('Should match render snapshot', () => {
      const countries = render(
        <Provider store={store}>
          <Countries />
        </Provider>
      );
      expect(countries).toMatchSnapshot();
    });
  });

  describe('functions', () => {
    test('filterFn returns correct filtered array', () => {
      const countries = countriesMock;
      const text = 'amo';

      const expectedFilter = filterFn(countries, text);

      // match country American Samoa
      const shouldMatchOnly = [countriesMock[0]];

      expect(expectedFilter).toStrictEqual(shouldMatchOnly);
    });
  });
});
