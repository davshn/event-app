export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADJUST_QTY = "ADJUST_QTY";
export const RESET = "RESET";

import store from "../store";


//go through all the items and add the item with the specific id
//with getState we can get whatever exists in the redux store
export const addToCart = (product, qty, count) => (dispatch) => {
  let exists = false;
  const cartItems = store.getState().cartItems.slice();
  cartItems.forEach((item) => {
    if (item.id === product.id) {
      exists = true;
      item.qty++;
      count++;
      qty++;
    }
  });
  if (!exists) {
    cartItems.push({ ...product, count: 1, qty: 1 });
  }
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const removeFromCart = (product) => (dispatch) => {
  const cartItems = store
    .getState().cartItems.slice()
    .filter((x) => x.id !== product.id);
  dispatch({
    type: REMOVE_FROM_CART,
    payload: { cartItems },
  });
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
};

export const adjustQty = (product, qty) => (dispatch) => {
  dispatch({
    type: ADJUST_QTY,
    payload: {
      product,
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
