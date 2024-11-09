import Image from "next/image"
import "./NavigationBar.css"

function NavigationBar({ toggleCartShown }: { toggleCartShown: () => void }) {
  return (
    <div className="navigationBar">

      <Image className="siteLogo" src="" alt="LOGO" />

      <input className="searchBar" type="text" placeholder=" Search ..." />

      <div className="headerButtons">
        <Image onClick={toggleCartShown} className="cartButton" src="" alt="CART" />
        <Image className="userButton" src="" alt="USER" />
      </div>

    </div>
  )
}

export default NavigationBar
