'use client'

import { useState } from "react";
import Cart from "../../shared/Cart";
import Categories from "../../shared/Categories";
//import Filters from "../../components/Filters/Filters";
import NavigationBar from "../../shared/NavigationBar";
//import ProductDetails from "./components/ProductDetails/ProductDetails";
//import ProductsList from "../../components/ProductsList/ProductsList";
import CartProvider from "../../utils/contexts/CartContext";
import ProductDetails from "./ProductDetails";

export default function Details({ params }: { params: { id: number}}) {
  const [cartShown, updateCartShown] = useState(false)
  const toggleCartShown = () => { updateCartShown(!cartShown) }

  return (
    <CartProvider>
      <NavigationBar {...{ toggleCartShown }} />
      <Categories />
      
        {/* <div className="listPage"> <Filters /> <ProductsList /> </div> */}
        <div className="detailsPage"> <ProductDetails params={{
        id: params.id
      }} /> </div>
        
      {cartShown && <Cart />}
    </CartProvider >
  );
}
