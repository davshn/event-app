
export const SET_USER = 'SET_USER';
export const ERASE_USER = 'ERASE_USER';
export const SET_INTERESTS = "SET_INTERESTS"
export const GET_TICKETS = 'GET_TICKETS'
import axios from 'axios';
;
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


export const getTickets = (id) => {
    return async function (dispatch) {
        try {
            const response = await axios.post('https://find-spot.herokuapp.com/infoTicket', { userId:id })
           
           
         dispatch({ type: GET_TICKETS, payload: response.data
            }); 
        }   catch (error) {

            
            return "Not found";
        }
    };
}