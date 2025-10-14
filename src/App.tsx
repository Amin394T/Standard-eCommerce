import "./styles/App.css"

import NavigationBar from "./components/NavigationBar/NavigationBar"
import Filters from "./components/Filters/Filters"
import Categories from "./components/Categories/Categories"
import ProductsList from "./components/ProductsList/ProductsList"
import Cart from "./components/Cart/Cart"
import CartProvider from "./utils/contexts/CartContext"
import ProductDetails from "./components/ProductDetails/ProductDetails"

import { useState } from "react"
import { Routes, Route } from "react-router-dom"

function App() {
  const [cartShown, updateCartShown] = useState(false)
  let toggleCartShown = () => { updateCartShown(!cartShown) }

  return (
    <CartProvider>
      <NavigationBar {...{ toggleCartShown }} />
      <Categories />

      <Routes>
        <Route path="/" element={<div className="list-page"> <Filters /> <ProductsList /> </div>} />
        <Route path="/product/:id" element={<div className="details-page"> <ProductDetails /> </div>} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>

      {cartShown && <Cart />}
    </CartProvider >

  )
}

export default App

// Router Tutorial https://youtu.be/Ul3y1LXxzdU