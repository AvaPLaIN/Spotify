//! IMPORTS
import { combineReducers, createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { watcherSaga } from './sagas/rootSaga';
import createSagaMiddleware from '@redux-saga/core';

//! IMPORT REDUCERS
import authReducer from './ducks/spotifyAuth';
import musicReducer from './ducks/spotifyMusic';

//! MIDDLEWARE
const loggerMiddleware = createLogger({});
let middleware = [];
if (process.env.NODE_ENV !== 'production')
  middleware = [...middleware, loggerMiddleware];

const sagaMiddleware = createSagaMiddleware();
middleware = [...middleware, sagaMiddleware];

//! STATES
const reducer = combineReducers({
  auth: authReducer,
  music: musicReducer,
});

//! LOCALSTORAGE
const saveToLocalStorage = (state) => {
  console.log('save changes to LocalStorage', state);
};

const loadFromLocalStorage = () => {
  console.log('load LocalStorage');
  return {};
};

const store = createStore(
  reducer,
  loadFromLocalStorage(),
  applyMiddleware(...middleware)
);
store.subscribe(() => saveToLocalStorage(store.getState()));
sagaMiddleware.run(watcherSaga);

//! EXPORT
export default store;
