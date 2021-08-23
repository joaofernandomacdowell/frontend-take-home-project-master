import React from 'react';
import { Provider } from 'react-redux';

import { render, screen } from '@testing-library/react';
import Header from './Header';

import store from '../../redux/store';

const header = render(
  <Provider store={store}>
    <Header />
  </Provider>
);

describe('Header', () => {
  describe('snapshot', () => {
    test('Should match render snapshot', () => {
      expect(Header).toMatchSnapshot();
    });
  });
  describe('component', () => {
    test('check h1 tag text', () => {
      const { getByText } = header;

      expect(
        screen.getByText('Countries Rest API')
      ).toBeInTheDocument();
    });
  });
});
