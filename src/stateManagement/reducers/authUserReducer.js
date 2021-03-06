import {SET_USER,ERASE_USER, SET_INTERESTS, GET_TICKETS}from '../actions/authUserActions';

const INITIAL_STATE = {
    token: "",
    id: null,
    name: "",
    interests: [],
    logged:false,    //Guarda si el usuario esta o no logueado
    tickets: []
}

const authUserReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch  (type){
        case SET_USER: return {          
            ...state,
            token:payload.token,
            id: payload.id,
            name: payload.name,
            interests: payload.interests,
            verifyed: payload.verifyProfile,
            profilePick: payload.profilePic,
            logged:true,
        }

        case GET_TICKETS: return {
            ...state,
            tickets: payload
        }

        case SET_INTERESTS: return {          
            ...state,
            interests: payload
        }
        
        case ERASE_USER: return {          
            ...INITIAL_STATE
        }
        
        default: return state;
    }
}

export default authUserReducer;