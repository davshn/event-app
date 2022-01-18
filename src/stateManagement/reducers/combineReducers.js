import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';
import authUserReducer from './authUserReducer';
import getEventsReducer from './getEventsReducer';
import getCategoriesReducer from './getCategoriesReducer';

//Recibe los reducers a combinar

export default combineReducers ({       
    darkModeReducer,authUserReducer,getEventsReducer,getCategoriesReducer
})