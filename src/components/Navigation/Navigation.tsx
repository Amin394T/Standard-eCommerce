import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigationBar">

      <img className="siteLogo" src="" alt="LOGO" />

      <input className="searchBar" type="text" placeholder=" Search ..." />

      <div className="headerButtons">
        <img className="cartButton" src="" alt="CART" />
        <img className="userButton" src="" alt="USER" />
      </div>

    </div>
  );
}

export default Navigation;
