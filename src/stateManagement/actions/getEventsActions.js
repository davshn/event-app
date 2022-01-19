import axios from "axios";

export const SEARCH_BY_FILTERS = 'SEARCH_BY_FILTERS';

export const searchByFilters = (body) => {
  return async function (dispatch) {
      try {
        const responses = await axios.post('https://find-spot.herokuapp.com/events/filters', body)
        return dispatch({ type: SEARCH_BY_FILTERS, payload: responses.data });
    }   catch (error) {
        return "Not found";
    }
  };
};

export const addToCart = (payload) => {
  return dispatch({ type: CART_UPDATE_ADD, payload });
};

export const removeFromFromCart = (payload) => {
  return { type: CART_UPDATE_REMOVE, payload };
};