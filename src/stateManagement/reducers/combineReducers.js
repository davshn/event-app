import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';
import authUserReducer from './authUserReducer';
import getEventsReducer from './getEventsReducer';

//Recibe los reducers a combinar

export default combineReducers ({       
    darkModeReducer,authUserReducer,getEventsReducer
})