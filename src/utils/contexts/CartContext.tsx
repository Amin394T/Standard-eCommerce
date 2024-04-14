import { PropsWithChildren, createContext, useState } from "react"

export type CartItem = {
   reference: string
   name: string
   quantity: number
   price: number
   image: string
   category: string
   description: string
}

export const CartContext = createContext<{
   cart: CartItem[]
   addToCart: (product: CartItem, quantity: number) => void
   removeFromCart: (product: CartItem) => void
   calculateSum: () => number
}>({
   cart: [],
   addToCart: () => null,
   removeFromCart: () => null,
   calculateSum: () => 0
})


function CartProvider({ children }: PropsWithChildren) {
   const [cart, updateCart] = useState<CartItem[]>([])

   let addToCart = (product: CartItem, quantity: number): void => {
      if (quantity > 0) {
         const productIndex = cart.findIndex(item => item.reference === product.reference)

         if (productIndex != -1) {
            const newCart = [...cart]
            newCart[productIndex].quantity = quantity
            updateCart(newCart)
         }
         else {
            updateCart([...cart, { ...product, quantity }])
         }
      }
   }

   let removeFromCart = (product: CartItem): void => {
      const productIndex = cart.findIndex(item => item.reference === product.reference)

      if (productIndex != -1) {
         const newCart = [...cart]
         newCart.splice(productIndex, 1)
         updateCart(newCart)
      }
   }

   let calculateSum = () => {
      return cart.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)
   }

   return (
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, calculateSum }}>
         {children}
      </CartContext.Provider>
   )
}

export default CartProvider