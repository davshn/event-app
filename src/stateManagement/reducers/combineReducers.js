import { combineReducers } from 'redux';
import darkModeReducer from './darkModeReducer';
import authUserReducer from './authUserReducer';

//Recibe los reducers a combinar

export default combineReducers ({       
    darkModeReducer,authUserReducer
})