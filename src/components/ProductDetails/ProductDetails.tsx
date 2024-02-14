import { useParams } from "react-router-dom"
import "./ProductDetails.css"

function ProductDetails() {
  const { id } = useParams()

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
        <div>PRODUCT {id}</div>
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