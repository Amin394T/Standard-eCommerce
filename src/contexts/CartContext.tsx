import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useReducer, useState } from "react";
import { CartItem } from "../utilities/product-types";

type CartAction =
  | { type: "ADD"; product: CartItem; }
  | { type: "REMOVE"; reference: string }
  | { type: "CLEAR" }
  | { type: "INIT"; cart: CartItem[] };


function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "INIT":
      return action.cart;

    case "ADD": {
      const quantity = action.product.quantity;
      if (quantity <= 0)
         return state;

      const existingIndex = state.findIndex((item) => item.reference == action.product.reference);

      if (existingIndex != -1) {
        return state.map((item, index) =>
          index == existingIndex ? { ...item, quantity } : item
        );
      }
      else {
         return [...state, { ...action.product }];
      }
    }

    case "REMOVE":
      return state.filter((item) => item.reference != action.reference);

    case "CLEAR":
      return [];

    default:
      return state;
  }
}


const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (reference: string) => void;
  clearCart: () => void;
  calculateSum: () => number;
  visible: boolean;
  toggleCart: (visible?: boolean) => void;
}>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  calculateSum: () => 0,
  visible: false,
  toggleCart: () => {},
});


export function CartProvider({ children }: PropsWithChildren) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const [visible, setVisible] = useState(false);

  // load cached cart from local storage
  useEffect(() => {
    try {
      const cart = localStorage.getItem("cart");
      if (cart)
        dispatch({ type: "INIT", cart: JSON.parse(cart) });
    }
    catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
  }, []);

  // save cart to local storage cache
  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cart]);


  const addToCart = (product: CartItem) =>
    dispatch({ type: "ADD", product });

  const removeFromCart = (reference: string) =>
    dispatch({ type: "REMOVE", reference });

  const clearCart = () => dispatch({ type: "CLEAR" });

  const calculateSum = useMemo(
    () => () =>
      cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const toggleCart = (visible?: boolean) =>
    setVisible((prev) => (typeof visible == "boolean" ? visible : !prev));


  const value = useMemo(
    () => ({ cart, addToCart, removeFromCart, clearCart, calculateSum, visible, toggleCart }),
    [cart, visible]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}


export function useCart() {
  return useContext(CartContext);
}
