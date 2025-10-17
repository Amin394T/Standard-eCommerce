import { PropsWithChildren, createContext, useContext, useEffect, useMemo, useReducer } from "react";

export type CartItem = {
  reference: string;
  price: number;
  quantity: number;
};


type CartAction =
  | { type: "ADD"; product: CartItem; quantity: number }
  | { type: "REMOVE"; reference: string }
  | { type: "CLEAR" }
  | { type: "INIT"; cart: CartItem[] };

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case "INIT":
      return action.cart;

    case "ADD": {
      if (action.quantity <= 0)
         return state;

      const existingIndex = state.findIndex((item) => item.reference == action.product.reference);

      if (existingIndex != -1) {
        return state.map((item, index) =>
          index == existingIndex
            ? { ...item, quantity: item.quantity + action.quantity }
            : item
        );
      }
      else {
         return [...state, { ...action.product, quantity: action.quantity }];
      }
    }

    case "REMOVE":
      return state.filter((item) => item.reference !== action.reference);

    case "CLEAR":
      return [];

    default:
      return state;
  }
}

const CartContext = createContext<{
  cart: CartItem[];
  addToCart: (product: CartItem, quantity: number) => void;
  removeFromCart: (reference: string) => void;
  clearCart: () => void;
  calculateSum: () => number;
}>({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  calculateSum: () => 0,
});

export function CartProvider({ children }: PropsWithChildren) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  useEffect(() => {
    try {
      const cart = localStorage.getItem("cart");
      if (cart) {
          dispatch({ type: "INIT", cart: JSON.parse(cart) });
      }
    }
    catch (error) {
      console.error("Failed to load cart from localStorage:", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Failed to save cart to localStorage:", error);
    }
  }, [cart]);

  const addToCart = (product: CartItem, quantity: number) =>
    dispatch({ type: "ADD", product, quantity });

  const removeFromCart = (reference: string) =>
    dispatch({ type: "REMOVE", reference });

  const clearCart = () => dispatch({ type: "CLEAR" });

  const calculateSum = useMemo(
    () => () =>
      cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart]
  );

  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      calculateSum,
    }),
    [cart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
