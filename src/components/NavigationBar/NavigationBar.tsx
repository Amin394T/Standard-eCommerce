import { useCart } from "../../utilities/contexts/CartContext";
import Categories from "./Categories";
import "./NavigationBar.css";

function NavigationBar() {
  const { toggleCart } = useCart();

  return (
    <>
      <div className="navigation-bar">
        <img className="site-logo" src="" alt="LOGO" />
        <input className="search-bar" type="text" placeholder=" Search ..." />

        <div className="header-buttons">
          <img onClick={() => toggleCart()} className="cart-button" src="" alt="CART" />
          <img className="user-button" src="" alt="USER" />
        </div>
      </div>

      <Categories />
    </>
  )
}

export default NavigationBar;
