
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  RESET,
} from "../actions/cartActions";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  count: 0,
  qty: 0,
  amount: 0,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        count: action.payload.count,
        qty: action.payload.qty,
      };
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        count: action.payload.count,
      };

    case RESET:
      return {
        ...state,
        cartItems: (action.payload.cartItems = []),
        qty: (action.payload.qty = 0),
        count: (action.payload.count = 0),
        amount: (action.payload.amount = 0),
      };

    default:
      return state;
  }
};

export default shopReducer;
