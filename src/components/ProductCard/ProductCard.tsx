import { useState } from "react";
import { Link } from "react-router-dom";

import "./ProductCard.css";
import { useCart } from "../../contexts/CartContext";
import { Product } from "../../utilities/product-types";


function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const imageURL = import.meta.env.VITE_IMG_URL + "/";

  return (
    <div className="product-card">
      <img className="product-image" src={imageURL + product.image} alt="PRODUCT" />
      <div className="product-title">{product.name}</div>
      <span className="product-price">
        <div>{product.price}$</div>
        <span>
          <input
            className="quantity-input" type="number" defaultValue="1"
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
          <button onClick={() => addToCart({ ...product, quantity })}>BUY</button>
          <Link to={"/product/" + product.reference}><button>Details</button></Link>
        </span>
      </span>
    </div>
  )
}

export default ProductCard;
