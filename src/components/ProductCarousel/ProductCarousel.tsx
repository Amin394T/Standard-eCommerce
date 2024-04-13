import { useState } from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { CartItem } from "../../utils/contexts/CartContext"

function ProductCarousel({ products, itemsToShow }: { products: CartItem[], itemsToShow: number }) {
    const [startIndex, setStartIndex] = useState(0);

    const goToPrevious = () => {
        setStartIndex((prevStartIndex) => Math.max(prevStartIndex - itemsToShow, 0));
    };

    const goToNext = () => {
        setStartIndex((prevStartIndex) => Math.min(prevStartIndex + itemsToShow, products.length - itemsToShow));
    };

    return (
        <div className="product-carousel">
            <button onClick={goToPrevious} disabled={startIndex === 0}>Previous</button>
            <div className="carousel-container">
                {products.slice(startIndex, startIndex + itemsToShow).map((product, index) => (
                    <div key={index} className="slide">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
            <button onClick={goToNext} disabled={startIndex + itemsToShow >= products.length}>Next</button>
        </div>
    );
};

export default ProductCarousel;
