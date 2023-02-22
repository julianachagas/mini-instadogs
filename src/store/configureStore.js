import { combineReducers, configureStore } from '@reduxjs/toolkit';

// reducers
import login from './login';
import photos from './photos';

// middleware
import localStorage from './middleware/localStorage';

const reducer = combineReducers({ login, photos });

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(localStorage),
});
// Store has all of the default middleware added, plus the localStorage middleware

export default store;
