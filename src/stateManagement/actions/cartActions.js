export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADJUST_QTY = "ADJUST_QTY";
export const RESET = "RESET";




export const addToCart = (event, qty, count) => (dispatch) => {
  let exists = false;
  const cartItems = store.getState().cartItems.slice();
  cartItems.forEach((item) => {
    if (item.id === event.id) {
      exists = true;
      item.qty++;
      count++;
      qty++;
    }
  });
  if (!exists) {
    cartItems.push({ ...event, count: 1, qty: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  
};

export const removeFromCart = (event) => (dispatch) => {
  const cartItems = store
    .getState().cartItems.slice()
    .filter((x) => x.id !== event.id);
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
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

export const reset = (cartItems, qty, count) => (dispatch) => {
  dispatch({
    type: RESET,
    payload: {
      cartItems,
      qty,
      count,
    },
  });
};
