import "./ProductsList.css"
import { CartItem } from "../../utilities/contexts/CartContext"
import useFetch from "../../utilities/hooks/useFetch"
import ProductCard from "../ProductCard/ProductCard"
import Filters from "./Filters"


function ProductsList() {
  const { data, loading } = useFetch<CartItem[]>('https://65b97a6eb71048505a8ae40f.mockapi.io/api/products')

  if (loading) return <div className="loading-spinner">Loading ...</div>
  
  return (
    <div className="list-page"> 
      <Filters />
      <div className="products-list">

        {data?.map((product) => <ProductCard key={product.reference} {...{ product }} />)}

        <div className="flex-break"> </div>

        {data?.length && data?.length > 30 ?
          <div className="pagination">
            <button> &lt;&lt; </button>
            <button> &lt; </button>
            <span> Page X </span>
            <button> &gt; </button>
            <button> &gt;&gt; </button>
          </div>
          : <></>
        }
      </div>
    </div>
  )
}

export default ProductsList