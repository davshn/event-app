import {SEARCH_BY_FILTERS}from '../actions/getEventsActions';

  const INITIAL_STATE = { //Estado inicial para usuarios
    events:[]
  };

const getEventsReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch  (type){
        case SEARCH_BY_FILTERS: return {          
            ...state,
            events:payload,
        }
        default: return state;
    }
}

export default getEventsReducer;