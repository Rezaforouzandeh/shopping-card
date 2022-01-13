const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      // console.log(action, state);
      // state.cart ? ! => item.qty ++ || push to cart

      // 1. copy from all states
      const updatedCart = [...state.cart];
      const updateItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      // check if not item exist
      if (updateItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 }); // give product and push quantity with value 1 (that means add a product to list)
      } else {
        // if item exist
        const updatedItem = { ...updatedCart[updateItemIndex] }; // item was selected from list of products
        updatedItem.quantity++; // inrease qty of product
        updatedCart[updateItemIndex] = updatedItem; // update list of products with updated item
      }
      return {
        ...state,
        cart: updatedCart,
        total: state.total + action.payload.offPrice,
      };
    }
    case "REMOVE_PRODUCT": {
      const updatedCart = [...state.cart];
      const updateItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      const updatedItem = { ...updatedCart[updateItemIndex] };
      if (updatedItem.quantity === 1) {
        const filteredCart = updatedCart.filter(
          (item) => item.id !== action.payload.id
        );
        return { ...state, cart: filteredCart, total : state.total - action.payload.offPrice };
      } else {
        updatedItem.quantity--; // decrease qty of product 1--
        updatedCart[updateItemIndex] = updatedItem; // update list of products with updated item
        return { ...state, cart: updatedCart , total : state.total - action.payload.offPrice};
      }
    }

    default:
      return state;
  }
};
export default cartReducer;
