'use client'

import ProductDetails from "./ProductDetails";
import NotFound from "./not-found";

export default function Details({ params }: { params: { id: number}}) {
  
  if (params.id > 100) return NotFound(params.id);

  return (    
        <div className="detailsPage"> <ProductDetails params={{ id: params.id }} /> </div>
  );
}
