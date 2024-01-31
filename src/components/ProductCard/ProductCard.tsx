import "./ProductCard.css"
import { useContext } from "react"
import { CartContext, CartItem } from "../../utils/contexts/CartContext"

function ProductCard({ product }: { product: CartItem }) {
  const { addToCart } = useContext(CartContext)

  //TODO: dynamic quantity

  return (
    <div className="productCard">
      <img className="productImage" src={product.image} alt="PRODUCT" />
      <div className="productTitle">{product.name}</div>
      <span className="productPrice">
        <div>{product.price}$</div>
        <button onClick={() => addToCart({ ...product, quantity: 1 })}>BUY</button>
      </span>
    </div>
  )

}

export default ProductCard
