import "./App.css"
import NavigationBar from "./components/NavigationBar/NavigationBar"
import Filters from "./components/Filters/Filters"
import Categories from "./components/Categories/Categories"
import ProductsList from "./components/ProductsList/ProductsList"
import Cart from "./components/Cart/Cart"
import CartProvider from "./utils/contexts/CartContext"
import { useState } from "react"

function App() {
  const [cartShown, updateCartShown] = useState(false)
  let toggleCartShown = () => { updateCartShown(!cartShown) }

  return (
    <>
      <CartProvider>
        <NavigationBar {...{ toggleCartShown }} />
        <Categories />
        <div className="mainSection">
          <Filters />
          <ProductsList />
        </div>
        {cartShown && <Cart />}
      </CartProvider>
    </>
  )
}

export default App