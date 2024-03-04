import "./ProductDetails.css"
import { useParams } from "react-router-dom"
import { CartItem } from "../../utils/contexts/CartContext"
import useFetch from "../../utils/hooks/useFetch"
import ProductCard from "../ProductCard/ProductCard"
import { useState } from "react"

function ProductDetails() {
  const { id } = useParams()
  const { data } = useFetch<CartItem>('https://65b97a6eb71048505a8ae40f.mockapi.io/api/products/' + id)

  const images = [
    data?.image,
    data?.image,
    data?.image
  ]
  const [selectedImage, setSelectedImage] = useState(images[0])

  let handleImageClick = (image: string | undefined) => {
    setSelectedImage(image)
  }

  return (
    <>
      <div className="primaryRow">
        <div className="imagesSection">

          <img src={selectedImage || data?.image} alt="Selected Image" />

          <div className="imageGallery">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} onMouseOver={() => handleImageClick(image)} />
            ))}
          </div>
        </div>

        <div className="detailsSection">
          <div className="title">{data?.name}</div>
          <div className="category">{data?.category}</div>
          <div className="description">{data?.description}</div>

          <table>
            <tr> <th>Specification</th> <th>Description</th> </tr>
            <tr> <td>Dimensions</td> <td>10cm x 15cm</td> </tr>
            <tr> <td>Weight</td> <td>500 grams</td> </tr>
            <tr> <td>Material</td> <td>Plastic</td> </tr>
            <tr> <td>Color</td> <td>Black</td> </tr>
            <tr> <td>Power</td> <td>120V AC</td> </tr>
            <tr> <td>Warranty</td> <td>1 year</td> </tr>
          </table>
        </div>

        <div className="purchaseSection">
          <div className="price"></div>
          <div className="deliveryInfo"></div>
          <div className="purchaseButton"></div>
        </div>
      </div>


      <div className="secondaryRow">
        <div className="overallScore"></div>

        <div className="reviewsSection">
          <div className="comment">
            <input className="userScore"></input>
          </div>
        </div>

        <div className="relatedProducts">
          {/* <ProductCard /> */}
        </div>
      </div>

    </>
  )
}

export default ProductDetails