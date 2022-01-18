import {GET_CATEGORIES}from '../actions/getCategoriesActions';

  const INITIAL_STATE = { //Estado inicial
    categories:{}
  };

const getCategoriesReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch  (type){
        case GET_CATEGORIES: return {          
            ...state,
            categories:payload,
        }
        default: return state;
    }
}

export default getCategoriesReducer;