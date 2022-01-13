// 1. create product context && product context dispatcher
import { useContext, useReducer, createContext } from "react";
import cartReducer from "./cartReducer";

const CartContext = createContext(); // state
const CartContextDispatcher = createContext(); // setState

const initialState = {
  cart: [],
  total: 0,
};

const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={cart}>
      <CartContextDispatcher.Provider value={dispatch}>
        {children}
      </CartContextDispatcher.Provider>
    </CartContext.Provider>
  );
};

export default CartProvider;

// custom hooks
export const useCart = () => useContext(CartContext); // accessing cart value
export const useCartActions = () => useContext(CartContextDispatcher); // accessing dispatch value
