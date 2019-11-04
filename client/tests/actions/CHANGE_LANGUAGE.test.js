import configureStore from 'redux-mock-store'
import { CHANGE_LANGUAGE } from '../../src/actions'


describe('changelanguage action', () => {

  test('should bind changelanguage action when is called with dispatch', () => {
    let store  = configureStore([])({});

    let param = { type: CHANGE_LANGUAGE, data: { lang: 'En' } }

    store.dispatch(param);

    let actions = store.getActions()

    expect(actions).toEqual([param])
  });
});
  
