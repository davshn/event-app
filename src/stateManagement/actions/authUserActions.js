export const SET_USER = 'SET_USER';
export const ERASE_USER = 'ERASE_USER';
export const SET_INTERESTS = "SET_INTERESTS"

//Acciones del estado de autenticacion

export function setUser(user) {
    
    return { type: SET_USER, payload:user };
  
}

export function eraseUser() {
    
    return { type: ERASE_USER };
  
}

export function setInterests(payload) {
    return ({ type: SET_INTERESTS, payload: payload });
}