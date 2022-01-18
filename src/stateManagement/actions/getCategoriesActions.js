import axios from "axios";

export const GET_CATEGORIES = 'GET_CATEGORIES';

export const getCategories = () => {
  return async function (dispatch) {
    try {
        const responses = await axios.get('https://find-spot.herokuapp.com/categories')
         let formatted = {}
        responses.data.map(category => {
          formatted[category.id] = category.name
        })
        return dispatch({ type: GET_CATEGORIES, payload: formatted });
    }   catch (error) {
        return "Not found";
    }
  };
};