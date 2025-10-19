import { useState } from 'react';
import "./ProductCarousel.css";
import { Product } from "../../types/product-types";
import ProductCard from '../ProductCard/ProductCard';


function ProductCarousel({ products, itemsToShow }: { products: Product[] | null, itemsToShow: number }) {
  const [startIndex, setStartIndex] = useState(0);

  if (!products) return <div>No Related Products</div>;

  let goToPrevious = () => {
    setStartIndex((prevStartIndex) => Math.max(prevStartIndex - itemsToShow, 0));
  }

  let goToNext = () => {
    setStartIndex((prevStartIndex) => Math.min(prevStartIndex + itemsToShow, products.length - itemsToShow));
  }

  return (
    <div className="product-carousel">
      <button onClick={goToPrevious} disabled={startIndex == 0}>Previous</button>
      <div className="carousel-container">
        {products.slice(startIndex, startIndex + itemsToShow).map((product, index) => (
          <div key={index} className="slide">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <button onClick={goToNext} disabled={startIndex + itemsToShow >= products.length}>Next</button>
    </div>
  )
}

export default ProductCarousel;
