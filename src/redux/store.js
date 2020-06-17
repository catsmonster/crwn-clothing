import { createStore, applyMiddleware } from 'redux';

import logger from 'redux-logger';

import rootReducer from './root-reducer';

import { persistStore } from 'redux-persist';

const middlewares = [];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
<<<<<<< .merge_file_a21196
};
=======
}
>>>>>>> .merge_file_a19284

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);