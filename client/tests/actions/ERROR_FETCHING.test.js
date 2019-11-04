import configureStore from 'redux-mock-store'
import { ERROR_FETCHING } from '../../src/actions'


describe('ERROR_FETCHING action', () => {

  test('should bind ERROR_FETCHING action when is called with dispatch', () => {
    let store  = configureStore([])({});

    let param = { type: ERROR_FETCHING}

    store.dispatch(param);

    let actions = store.getActions()

    expect(actions).toEqual([param])
  });
});
  
