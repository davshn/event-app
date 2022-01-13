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