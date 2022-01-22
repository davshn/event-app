import {SEARCH_BY_FILTERS , SORT_BY_DATE, SORT_BY_NAME,GET_EVENTS}from '../actions/getEventsActions';

  const INITIAL_STATE = { //Estado inicial para usuarios
    Events:[],
    events:[],
    date:[],
  };

const getEventsReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch  (type){
        case SEARCH_BY_FILTERS: return {          
            ...state,
            events:payload,
            date:payload,
        }
        default:
          return state;
    }  
  }
export default getEventsReducer;
