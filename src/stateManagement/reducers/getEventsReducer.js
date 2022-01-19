import {SEARCH_BY_FILTERS, CART_UPDATE_ADD, CART_UPDATE_REMOVE}from '../actions/getEventsActions';

  const INITIAL_STATE = { //Estado inicial para usuarios
    events:[],
    cartEvents:[]
  };

const getEventsReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch  (type){
        case SEARCH_BY_FILTERS: return {          
            ...state,
            events:payload,
        };
        case CART_UPDATE_ADD: return {       
          ...state,
          cartEvents:state.cartEvents.concat(payload),
        };
        case CART_UPDATE_REMOVE: return {       
            ...state,
            cartEvents: state.cartEvents.filter(event => payload.id !== event.id),
      }
        default: return state;
    }
}

export default getEventsReducer;