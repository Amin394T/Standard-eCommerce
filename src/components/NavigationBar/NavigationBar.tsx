import "./NavigationBar.css"

function NavigationBar({ toggleCartShown }: { toggleCartShown: () => void }) {
  return (
    <div className="navigation-bar">

      <img className="site-logo" src="" alt="LOGO" />

      <input className="search-bar" type="text" placeholder=" Search ..." />

      <div className="header-buttons">
        <img onClick={toggleCartShown} className="cart-button" src="" alt="CART" />
        <img className="user-button" src="" alt="USER" />
      </div>

    </div>
  )
}

export default NavigationBar
