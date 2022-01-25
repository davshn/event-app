export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADJUST_QTY = "ADJUST_QTY";
export const RESET = "RESET";

export const addToCart = (event) => (dispatch) => {
  const cartItems = event;
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
};

export const removeFromCart = (event) => (dispatch) => {
  const cartItems = event;
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItems },
  });
};

export const adjustQty = (event, qty) => (dispatch) => {
  dispatch({
    type: ADJUST_QTY,
    payload: {
      event,
      qty,
    },
  });
};

export const reset = () => (dispatch) => {
  dispatch({
    type: RESET,
    payload: {},
  });
};
