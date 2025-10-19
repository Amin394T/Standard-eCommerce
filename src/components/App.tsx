
import { Routes, Route } from "react-router-dom";

import { useCart } from "../utilities/contexts/CartContext";
import NavigationBar from "./NavigationBar/NavigationBar";
import ProductsList from "./ProductsList/ProductsList";
import ProductDetails from "./ProductDetails/ProductDetails";
import Cart from "./Cart/Cart";


function App() {
  const { visible } = useCart();
  
  return (
    <>
      <NavigationBar />

      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<h1>NOT FOUND</h1>} />
      </Routes>

      {visible && <Cart />}
    </>
  )
}

export default App;