import axios from "axios";

export const SEARCH_BY_FILTERS = 'SEARCH_BY_FILTERS';

export const searchByFilters = (body,) => {
  return async function (dispatch) {
      try {
        const responses = await axios.post('https://find-spot.herokuapp.com/events/filters', body)
        return dispatch({ type: SEARCH_BY_FILTERS, payload: sort(responses.data,body.type,body.sortType) }); 
    }   catch (error) {
        return "Not found";
    }
  };
};

function sort(arr, type, sortType = "ascending"){
  let sorted = arr.sort(function(a, b) {
    if(type==="name"){
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
    }
    else if(type==="date"){
      var nameA = a.date;
      var nameB = b.date;
    }
    else if(type==="price"){
      var nameA = a.price;
      var nameB = b.price;
    }
    
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
  });
  if (sortType==="descending"){
    return sorted.reverse()
  }
  return sorted;
};