'use client'

import { useState } from "react";
import Cart from "./shared/Cart";
import Categories from "./shared/Categories";
import Filters from "./productsList/Filters";
import NavigationBar from "./shared/NavigationBar";
//import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductsList from "./productsList/ProductsList";
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
