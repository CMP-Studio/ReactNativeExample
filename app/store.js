import { createStore, compose } from 'redux';

import devTools from 'remote-redux-devtools';

import rootReducer from './reducers/root';

export function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      devTools()
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept(() => {
      const nextRootReducer = require('./reducers/root').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
