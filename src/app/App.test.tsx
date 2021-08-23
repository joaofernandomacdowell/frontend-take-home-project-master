import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from './App';
import store from '../redux/store';

describe('App Tests', () => {
  test('Should match render snapshot', () => {
    const app = render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(app).toMatchSnapshot();
  });
});
