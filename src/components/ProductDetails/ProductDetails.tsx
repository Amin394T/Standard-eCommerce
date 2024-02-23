import "./ProductDetails.css"
import { useParams } from "react-router-dom"
import { CartItem } from "../../utils/contexts/CartContext"
import useFetch from "../../utils/hooks/useFetch"

function ProductDetails() {
  const { id } = useParams()
  const { data } = useFetch<CartItem>('https://65b97a6eb71048505a8ae40f.mockapi.io/api/products/' + id)
  console.log(data)
  return (
    <>
      <div className="productDetails">
        <div className="imagesSection">
          <img className="focusedImage" />
          <div className="otherImages">
            <img className="unfocusedImage"></img>
          </div>
        </div>

        <div className="detailsSection">
          <div className="title"></div>
          <div className="description"></div>
          <div className="specifications"></div>
        </div>

        <div className="purchaseSection">
          <div className="priceInfo"></div>
          <div className="purchaseButtons"></div>
          <div className="sellerInfo"></div>
        </div>
      </div>

      <div className="similarProducts">
        <div>{data && data.name}</div>
      </div>

      <div className="productReviews">
        <div className="overallScore"></div>
        <div className="commentsSection">
          <div className="comment">
            <input className="userScore"></input>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails