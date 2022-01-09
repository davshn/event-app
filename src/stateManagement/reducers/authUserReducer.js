import {SET_USER,ERASE_USER}from '../actions/authUserActions';

const INITIAL_STATE = {
    token: "",
    id: null,
    name: "",
    interests: [],
    logged:false    //Guarda si el usuario esta o no logueado
}

const authUserReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch  (type){
        case SET_USER: return {          
            ...state,
            token:payload.token,
            id: payload.id,
            name: payload.name,
            interests: payload.interests,
            logged:true,
        }
        
        case ERASE_USER: return {          
            ...INITIAL_STATE
        }
        
        default: return state;
    }
}

export default authUserReducer;