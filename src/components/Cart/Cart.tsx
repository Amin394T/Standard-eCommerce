import "./Cart.css"
import { useContext } from "react"
import { CartContext } from "../../utils/contexts/CartContext"

function Cart() {
  const { cart, addToCart, removeFromCart } = useContext(CartContext)

  //TODO: quantity as field + remove item

  return (
    <div className="cart">
      {cart.map(product =>
        <div key={product.reference}>
          {product.name} x{product.quantity}
          &nbsp;<button onClick={() => addToCart({ ...product, quantity: 1 })}>Add</button>
          &nbsp;<button onClick={() => removeFromCart({ ...product })}>Remove</button>
        </div>
      )}
    </div>
  )
}

export default Cart