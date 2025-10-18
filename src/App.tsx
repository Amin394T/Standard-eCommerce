import "./global.css"
import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import { QueryClientProvider, QueryClient } from "react-query"

import NavigationBar from "./components/NavigationBar/NavigationBar"
import ProductsList from "./components/ProductsList/ProductsList"
import ProductDetails from "./components/ProductDetails/ProductDetails"
import Cart from "./components/Cart/Cart"
import { CartProvider } from "./utilities/contexts/CartContext";


const queryClient = new QueryClient();

function App() {
  const [cartShown, updateCartShown] = useState(false)
  let toggleCart = () => { updateCartShown(!cartShown) }

  return (
    <QueryClientProvider client={queryClient}>
    <CartProvider>
      <NavigationBar toggleCart={toggleCart} />

      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>

      {cartShown && <Cart />}
    </CartProvider >
    </QueryClientProvider>

  )
}

export default App