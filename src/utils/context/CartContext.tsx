import { PropsWithChildren, createContext, useState } from "react"

type CartItem = {
   reference: string
   name: string
   quantity: number
   price: number
}

export const CartContext = createContext<{
   cart: CartItem[];
   addToCart: (product: CartItem) => void;
   removeFromCart: (product: CartItem) => void;
}>({
   cart: [],
   addToCart: () => { },
   removeFromCart: () => { },
});


function CartProvider({ children }: PropsWithChildren) {
   const [cart, updateCart] = useState<CartItem[]>([])

   let addToCart = (product: CartItem): void => {
      const productIndex = cart.findIndex(item => item.reference === product.reference)

      const newCart = [...cart]
      if (productIndex != -1) {
         newCart[productIndex].quantity++
         updateCart(newCart)
      }
      else {
         updateCart([...newCart, product])
      }
   }

   let removeFromCart = (product: CartItem): void => {
      const productIndex = cart.findIndex(item => item.reference === product.reference)

      if (productIndex != -1) {
         const newCart = [...cart]
         newCart[productIndex].quantity <= 1 ?
            newCart.splice(productIndex, 1) :
            newCart[productIndex].quantity--
         updateCart(newCart)
      }
   }

   return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
         {children}
      </CartContext.Provider>
   )
}

export default CartProvider