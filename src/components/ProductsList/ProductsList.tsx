import ProductCard from "../ProductCard/ProductCard"
import "./ProductsList.css"

const productsNumber = 32;

function ProductsList() {
  return (
    <div className="productsList">
      
      { [...Array(productsNumber).keys()].map(
          (product) => <ProductCard key={product.toString()} name={"Product " + product.toString()} />
      ) }

      <div className="flexBreak"> </div>

      { productsNumber > 30 ?
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