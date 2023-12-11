import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Filters from "./components/Filters/Filters";
import Categories from "./components/Categories/Categories";
import ProductsList from "./components/ProductsList/ProductsList";

function App() {
  return (
    <>
      <Navigation />
      <Categories />
      <div className="siteBody">
        <Filters />
        <ProductsList />
      </div>
    </>
  );
}

export default App;
