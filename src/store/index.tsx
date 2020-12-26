import { createStore, applyMiddleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import reducers from '~/store/ducks';
import sagas from '~/store/sagas';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const sagaMiddleware = createSagaMiddleware();

const store: Store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware),
);
const persistor = persistStore(store);

sagaMiddleware.run(sagas);

export { store, persistor };
