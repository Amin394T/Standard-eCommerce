import "./App.css";
import NavigationBar from "./components/Navigation/navigationBar";
import Filters from "./components/Filters/Filters";
import Categories from "./components/Categories/Categories";
import ProductsList from "./components/ProductsList/ProductsList";


function App() {
  return (
    <>
      <NavigationBar />
      <Categories />
      <div className="productSearch">
        <Filters />
        <ProductsList />
      </div>
    </>
  );
}

export default App;
