import "./Cart.css";
import { useCart } from "../../contexts/CartContext";


function Cart() {
  const { cart, addToCart, removeFromCart, calculateSum } = useCart();

  return (
    <div className="cart">
      {cart.map(product =>
        <div key={product.reference}>
          {product.name}

          <span className="product-total">
            {product.price}$ x{product.quantity} = {(product.price * product.quantity).toFixed(2)}$
          </span>

          <input
            className="quantity-input" type="number" min="1" defaultValue={product.quantity}
            onChange={(e) => addToCart({ ...product, quantity: Number(e.target.value) })}
          />

          <button onClick={() => removeFromCart(product.reference)}>Cancel</button>
        </div>
      )}
      
      <div className="cart-total">Total : {calculateSum().toFixed(2)}$</div>
    </div>
  )
}

export default Cart;