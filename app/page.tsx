'use client'

import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Categories from "./components/Categories/Categories";
import Filters from "./components/Filters/Filters";
import NavigationBar from "./components/NavigationBar/NavigationBar";
//import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductsList from "./components/ProductsList/ProductsList";
import CartProvider from "./utils/contexts/CartContext";

export default function Home() {
  const [cartShown, updateCartShown] = useState(false)
  const toggleCartShown = () => { updateCartShown(!cartShown) }

  return (
    <CartProvider>
      <NavigationBar {...{ toggleCartShown }} />
      <Categories />
      
      
        <div className="listPage"> <Filters /> <ProductsList /> </div>
        {/* <div className="detailsPage"> <ProductDetails /> </div> */}
        
      {cartShown && <Cart />}
    </CartProvider >
  );
}
