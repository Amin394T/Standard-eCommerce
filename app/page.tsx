'use client'

import Filters from "./productsList/Filters";
import ProductsList from "./productsList/ProductsList";

export default function Home() {

  return (
      <div className="listPage"> <Filters /> <ProductsList /> </div>
  );
}
