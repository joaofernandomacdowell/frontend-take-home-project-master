import thunk from 'redux-thunk';
import nock from 'nock';
import path from 'path';
import configureMockStore from 'redux-mock-store';

import { AppState } from '../store';
import rootReducer from '../reducers/index';

import countriesMock from './mocks/countriesMock';
import * as actions from './countriesActions';
import {
  FETCH_COUNTRIES_BEGIN,
  FETCH_COUNTRIES_SUCCESS,
  FetchCountriesBeginAction,
  FetchCountriesSucceededAction,
  FetchCountriesFailedAction,
  CountriesActionTypes,
} from '../types';

const middlewares = [thunk];
const mockStore =
  configureMockStore<Pick<AppState, 'countriesState'>>(middlewares);
const createState =
  (initialState: AppState) =>
  (actionsCreators: CountriesActionTypes[]) =>
    actionsCreators.reduce(rootReducer, initialState);

nock.back.fixtures = path.join(__dirname, '../../', 'fixtures');

describe('Redux - Countries Tests', () => {
  describe('Action Creators', () => {
    it('Should create fetchCountriesBegin', () => {
      const expectedAction: FetchCountriesBeginAction = {
        type: 'FETCH_COUNTRIES_BEGIN',
      };
      expect(actions.fetchCountriesBegin()).toStrictEqual(
        expectedAction
      );
    });

    it('Should create fetchCountriesFailure', () => {
      const err = new Error('fetchCountriesFailure test');
      const expectedAction: FetchCountriesFailedAction = {
        type: 'FETCH_COUNTRIES_FAILURE',
        payload: err.message,
      };
      expect(actions.fetchCountriesFailure(err)).toStrictEqual(
        expectedAction
      );
    });

    it('Should create fetchCountriesSuccess', () => {
      const expectedAction: FetchCountriesSucceededAction = {
        type: 'FETCH_COUNTRIES_SUCCESS',
        payload: countriesMock,
      };
      expect(
        actions.fetchCountriesSuccess(countriesMock)
      ).toStrictEqual(expectedAction);
    });
  });
  describe('Fetch countries', () => {
    afterEach(() => {
      nock.cleanAll();
    });
    afterAll(() => {
      nock.restore();
      jest.restoreAllMocks();
    });

    it('Should fetch and update state', async () => {
      nock.back.setMode('record');
      const state: AppState = {
        countriesState: {
          isFetching: false,
          hasError: false,
          countries: [],
        },
        searchState: { text: '' },
      };

      const store = mockStore(createState(state));
      const { nockDone } = await nock.back('countries.json');

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await store.dispatch(actions.fetchCountries() as any);
      nockDone();
      nock.back.setMode('wild');

      const storeActions =
        store.getActions() as CountriesActionTypes[];

      const beginAction = storeActions.find(
        (value) => value.type === FETCH_COUNTRIES_BEGIN
      );
      expect(beginAction).toStrictEqual({
        type: FETCH_COUNTRIES_BEGIN,
      });

      const successAction = storeActions.find(
        (value) => value.type === FETCH_COUNTRIES_SUCCESS
      );
      expect(successAction.type).toBe(FETCH_COUNTRIES_SUCCESS);
      expect(successAction).toMatchSnapshot('success-action');

      expect(store.getState().countriesState).toMatchSnapshot(
        'countries-state'
      );
    });
  });
});
