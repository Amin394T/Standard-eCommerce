import "./NavigationBar.css"

function NavigationBar({ toggleCartShown }: { toggleCartShown: () => void }) {
  return (
    <div className="navigationBar">

      <img className="siteLogo" src="" alt="LOGO" />

      <input className="searchBar" type="text" placeholder=" Search ..." />

      <div className="headerButtons">
        <img onClick={toggleCartShown} className="cartButton" src="" alt="CART" />
        <img className="userButton" src="" alt="USER" />
      </div>

    </div>
  )
}

export default NavigationBar
