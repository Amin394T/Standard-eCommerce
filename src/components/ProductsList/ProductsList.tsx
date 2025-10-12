import { CartItem } from "../../utils/contexts/CartContext"
import useFetch from "../../utils/hooks/useFetch"
import ProductCard from "../ProductCard/ProductCard"
import "./ProductsList.css"

function ProductsList() {
  const { data, loading } = useFetch<CartItem[]>('https://65b97a6eb71048505a8ae40f.mockapi.io/api/products')

  if (loading) return <div className="loadingSpinner">Loading ...</div>
  
  return (
    <div className="productsList">

      {data?.map((product) => <ProductCard key={product.reference} {...{ product }} />)}

      <div className="flexBreak"> </div>

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
  )
}

export default ProductsList