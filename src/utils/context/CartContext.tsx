import { PropsWithChildren, createContext, useState } from "react"

export type CartItem = {
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
      const productIndex = cart.findIndex(item => item === product)

      const newCart = [...cart]
      if (productIndex != -1) {
         newCart[productIndex].quantity++
         updateCart(newCart)
      }
      else {
         updateCart([...newCart, product])
      }
      console.log(cart)
   }

   let removeFromCart = (product: CartItem): void => {
      const productIndex = cart.findIndex(item => item === product)

      if (productIndex != -1) {
         const newCart = [...cart]
         newCart[productIndex].quantity <= 1 ?
            newCart.splice(productIndex) :
            newCart[productIndex].quantity--
         updateCart(newCart)
      }
      console.log(cart)
   }

   return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
         {children}
      </CartContext.Provider>
   )
}

export default CartProvider