export const SET_USER = 'SET_USER';
export const ERASE_USER = 'ERASE_USER';

//Acciones del estado de autenticacion

export function setUser(user) {
    
    return { type: SET_USER, payload:user };
  
}

export function eraseUser() {
    
    return { type: ERASE_USER };
  
}

