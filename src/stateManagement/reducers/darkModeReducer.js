import {SET_DARK_ACTIVE,SET_DARK_INACTIVE}from '../actions/darkModeActions';

//Reducer para el modo oscuro

const INITIAL_STATE = {
    darkMode:false         //Inicializa el modo oscuro apagado
}

const  darkModeReducer = (state=INITIAL_STATE,{type})=>{
    switch  (type){
        case SET_DARK_ACTIVE: return{ 
            ...state,                   //Activa el modo oscuro
            darkMode:true}
        case SET_DARK_INACTIVE: return{ 
            ...state,                   //Desactiva el modo oscuro
            darkMode:false}
        default: return state;
    }
}

export default darkModeReducer;