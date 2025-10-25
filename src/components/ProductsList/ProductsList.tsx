import { useQuery } from "react-query";

import "./ProductsList.css";
import api from "../../utilities/axios-interceptor";
import { Product } from "../../utilities/product-types";
import ProductCard from "../ProductCard/ProductCard";
import Filters from "./Filters";


function ProductsList() {
  const { data: products, isLoading, isFetching, isError } = useQuery<Product[], Error>({
    queryKey: ["products"],
    queryFn: () => api.get("/products"),
    staleTime: 1000 * 60 * 2
  });

  
  if (isLoading || isFetching) return <div className="loading-spinner">Loading ...</div>;
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
