
// export default function addToCart (payload) {
//     return dispatch({ type: CART_UPDATE_ADD, payload });
//   };

  export default function addToCart (payload) {
    return async function (dispatch) {
        try {
            return dispatch({ type: CART_UPDATE_ADD, payload });
      }   catch (error) {
          return "Not found";
      }
    };
  };