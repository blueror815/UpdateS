import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducer';

/**
 * Passing reducers, initial state and middleware to store.
 */
function configureStore(initialState) {
  return createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
  );
}

const store = configureStore();

export default store;

