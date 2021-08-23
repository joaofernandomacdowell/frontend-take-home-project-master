import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import Countries from './Countries';
import store from '../../redux/store';

describe('Countries', () => {
  test('Should match render snapshot', () => {
    const app = render(
      <Provider store={store}>
        <Countries />
      </Provider>
    );

    expect(app).toMatchSnapshot();
  });
});
