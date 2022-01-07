import {SET_USER}from '../actions/authUserActions';

const INITIAL_STATE = {
    token: "",
    id: null,
    name: "",
    interests: [],
    logged:false    
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
        default: return state;
    }
}

export default authUserReducer;