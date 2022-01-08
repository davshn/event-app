export const SET_USER = 'SET_USER';

//Acciones del estado de autenticacion

export function setUser(user) {
    
    return { type: SET_USER, payload:user };
  
}

