
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  RESET,
} from "../actions/cartActions";

const initialState = {
  cartItems:[],
  update:0,
  itemCount:0,
  totalToPay:0,
};

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let newItem = action.payload.cartItems;
      let found = state.cartItems.findIndex(i=>i.id===newItem.id);
      if (found===-1){
        return {
          ...state,
          cartItems: state.cartItems.concat(newItem),
          update: state.update+1,
          itemCount:state.itemCount+1,
          totalToPay:state.totalToPay+newItem.price,
        };
      } else {
        let updatedItem = state.cartItems[found];
        updatedItem.counter++;
        let updatedItems = state.cartItems;
        updatedItems.splice(found, 1, updatedItem)
        return {
          ...state,
          cartItems: updatedItems,
          update: state.update+1,
          itemCount:state.itemCount+1,
          totalToPay:state.totalToPay+newItem.price,
        }
      };
      
    case REMOVE_FROM_CART:
      let remItem = action.payload.cartItems;
      let index = state.cartItems.findIndex(i=>i.id===remItem.id);
      let actualCounter = state.cartItems[index].counter;
      if (actualCounter === 0){
        return {
          ...state
        };
      } else {
        let updatedItem2 = state.cartItems[index];
        updatedItem2.counter--;
        let updatedItems2 = state.cartItems;
        updatedItems2.splice(index, 1, updatedItem2)
        return {
          ...state,
          cartItems: updatedItems2,
          update: state.update+1,
          itemCount:state.itemCount-1,
          totalToPay:state.totalToPay-remItem.price,
        }
      };

    case RESET:
      return {
        ...state,
        cartItems:[],
        update:0,
        itemCount:0,
        totalToPay:0,
      };

    default:
      return state;
  }
};

export default shopReducer;