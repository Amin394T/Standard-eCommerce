import "./ProductCard.css"
import { useContext, useState } from "react"
import { CartContext, CartItem } from "../../utils/contexts/CartContext"

import Image from "next/image"
import Link from "next/link"

function ProductCard({ product }: { product: CartItem }) {
  const { addToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  return (
    <div className="productCard">
      <Image className="productImage" src={product.image} alt="PRODUCT" />
      <div className="productTitle">{product.name}</div>
      <span className="productPrice">
        <div>{product.price}$</div>
        <span>
          <input className="quantityInput" type="number" defaultValue="1" onChange={(e) => setQuantity(Number(e.target.value))} />
          <button onClick={() => addToCart(product, quantity)}>BUY</button>
          <Link href={"/product/" + product.reference}><button>Details</button></Link>
        </span>
      </span>
    </div>
  )
}

export default ProductCard
