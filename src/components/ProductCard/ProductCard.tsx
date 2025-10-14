import "./ProductCard.css"
import { useContext, useState } from "react"
import { CartContext, CartItem } from "../../utilities/contexts/CartContext"
import { Link } from "react-router-dom"

function ProductCard({ product }: { product: CartItem }) {
  const { addToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="product-card">
      <img className="product-image" src={product.image} alt="PRODUCT" />
      <div className="product-title">{product.name}</div>
      <span className="product-price">
        <div>{product.price}$</div>
        <span>
          <input className="quantity-input" type="number" defaultValue="1" onChange={(e) => setQuantity(Number(e.target.value))} />
          <button onClick={() => addToCart(product, quantity)}>BUY</button>
          <Link to={"/product/" + product.reference}><button>Details</button></Link>
        </span>
      </span>
    </div>
  )
}

export default ProductCard
