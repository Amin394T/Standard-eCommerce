'use client'

import Filters from "./Filters"
import ProductsList from "./ProductsList"

function page() {
  return (
    <div className="listPage"> <Filters /> <ProductsList /> </div>
  )
}

export default page