import "./ProductCard.css"
import { useContext } from "react"
import { CartContext, CartItem } from "../../utils/contexts/CartContext"

function ProductCard({ product }: { product: CartItem }) {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="productCard">
      <img className="productImage" src="" alt="PRODUCT" />
      <div className="productTitle">{product.name}</div>
      <span className="productPrice">
        <div>{product.price}$</div>
        <button onClick={() => addToCart(product)}>BUY</button>
      </span>
    </div>
  )

}

export default ProductCard
