import { useContext } from "react"
import { CartContext } from "../../utils/context/CartContext"

function Cart() {
  const product1 = {
    reference: '7DN02Z9S',
    name: 'ThinkPad Laptop',
    quantity: 2,
    price: 360
  }
  const product2 = {
    reference: 'C932KZ1X',
    name: 'Dell Full HD Screen',
    quantity: 1,
    price: 120
  }

  const { cart, addToCart, removeFromCart } = useContext(CartContext)

  return (
    <>
      <div>{cart.map(product => product.name)}</div>
      <button onClick={() => addToCart(product1)}>Add Product 1</button>
      <button onClick={() => removeFromCart(product1)}>Remove Product 1</button>
      <br/>
      <button onClick={() => addToCart(product2)}>Add Product 2</button>
      <button onClick={() => removeFromCart(product2)}>Remove Product 2</button>
    </>
  )
}

export default Cart