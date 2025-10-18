import "./ProductsList.css";
import { useQuery } from "react-query";
import { Product } from "../../utilities/types/product-types";
import ProductCard from "../ProductCard/ProductCard";
import Filters from "./Filters";


async function fetchProducts() {
  const response = await fetch(import.meta.env.VITE_API_URL + "/products");
  if (!response.ok) throw new Error("Failed to fetch products");
  return response.json();
}

function ProductsList() {
  const { data: products, isLoading, isError } =
    useQuery<Product[], Error>({ queryKey: ["products"], queryFn: fetchProducts, staleTime: 1000 * 60 * 2 });

  if (isLoading) return <div className="loading-spinner">Loading ...</div>;
  if (isError) return <div className="error-message"> Error loading products </div>;

  return (
    <div className="list-page">
      <Filters />
      <div className="products-list">
        {products?.map((product) => (
          <ProductCard key={product.reference} product={product} />
        ))}

        <div className="flex-break" />

        {products && products.length > 30 && (
          <div className="pagination">
            <button> &lt;&lt; </button>
            <button> &lt; </button>
            <span> Page X </span>
            <button> &gt; </button>
            <button> &gt;&gt; </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductsList;
