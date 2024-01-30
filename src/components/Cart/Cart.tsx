import "./Cart.css"
import { useContext } from "react"
import { CartContext } from "../../utils/contexts/CartContext"

function Cart() {
  const { cart } = useContext(CartContext)

  return (
    <div className="cart">
      {cart.map(product => <div key={product.reference}> {product.name} x{product.quantity} </div>)}
    </div>
  )
}

export default Cart