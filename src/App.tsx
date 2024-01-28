import "./App.css"
import NavigationBar from "./components/NavigationBar/NavigationBar"
import Filters from "./components/Filters/Filters"
import Categories from "./components/Categories/Categories"
import ProductsList from "./components/ProductsList/ProductsList"
import Cart from "./components/Cart/Cart"
import CartProvider from "./utils/context/CartContext"

function App() {
  return (
    <>
      <CartProvider>
        <NavigationBar />
        <Categories />
        <div className="mainSection">
          <Filters />
          <ProductsList />
        </div>
        <Cart />
      </CartProvider>
    </>
  )
}

export default App