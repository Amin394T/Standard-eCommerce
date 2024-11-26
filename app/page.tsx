'use client'

import Filters from "./productsList/Filters";
import ProductsList from "./productsList/ProductsList";

export default function Home() {
  //TO-DO: replace with proper home page
  return (
      <div className="listPage"> <Filters /> <ProductsList /> </div>
  );
}
