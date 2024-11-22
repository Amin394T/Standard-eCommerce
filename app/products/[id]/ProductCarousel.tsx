import "./ProductCarousel.css"
import ProductCard from '../../shared/ProductCard'
import { useState } from 'react'
import { CartItem } from "../../utils/contexts/CartContext"

function ProductCarousel({ products, itemsToShow }: { products: CartItem[] | null, itemsToShow: number }) {
    const [startIndex, setStartIndex] = useState(0)

    if (!products) return <div>No Related Products</div>

    const goToPrevious = () => {
        setStartIndex((prevStartIndex) => Math.max(prevStartIndex - itemsToShow, 0))
    }

    const goToNext = () => {
        setStartIndex((prevStartIndex) => Math.min(prevStartIndex + itemsToShow, products.length - itemsToShow))
    }

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
    )
}

export default ProductCarousel
