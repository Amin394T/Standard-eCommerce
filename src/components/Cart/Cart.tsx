import "./Cart.css"
import { useContext } from "react"
import { CartContext } from "../../utilities/contexts/CartContext"

function Cart() {
  const { cart, addToCart, removeFromCart, calculateSum } = useContext(CartContext)

  return (
    <div className="cart">
      {cart.map(product =>
        <div key={product.reference}>
          {product.name} <span className="product-total">{product.price}$ x{product.quantity} = {(product.price * product.quantity).toFixed(2)}$</span>
          <input className="quantity-input" type="number" defaultValue={product.quantity} onChange={(e) => addToCart(product, Number(e.target.value))} />
          <button onClick={() => removeFromCart(product)}>Cancel</button>
        </div>
      )}
      <div className="cart-total">Total : {calculateSum().toFixed(2)}$</div>
    </div>
  )
}

export default Cart