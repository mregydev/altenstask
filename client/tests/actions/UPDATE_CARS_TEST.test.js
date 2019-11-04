import configureStore from 'redux-mock-store'
import { UPDATE_CARS } from '../../src/actions'


describe('UPDATE_CARS action', () => {

  test('should bind UPDATE_CARS action when is called with dispatch', () => {
    let store  = configureStore([])({});

    let param = { type: UPDATE_CARS, data: { cars: [] } }

    store.dispatch(param);

    let actions = store.getActions()

    expect(actions).toEqual([param])
  });
});
  
