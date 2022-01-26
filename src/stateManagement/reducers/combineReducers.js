import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';
import authUserReducer from './authUserReducer';
import getEventsReducer from './getEventsReducer';
import getCategoriesReducer from './getCategoriesReducer';
import shopReducer from './shopReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

//Recibe los reducers a combinar

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    // whitelist: ['shopReducer']
  };

export default combineReducers ({       
    darkModeReducer,
    authUserReducer,
    getEventsReducer,
    getCategoriesReducer,
    shopReducer: persistReducer(persistConfig,shopReducer),
})