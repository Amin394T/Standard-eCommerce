import "./ProductDetails.css"
import { useParams } from "react-router-dom"
import { CartContext, CartItem } from "../../utils/contexts/CartContext"
import { useContext, useState } from "react"
import useFetch from "../../utils/hooks/useFetch"
//import ProductCard from "../ProductCard/ProductCard"


function ProductDetails() {
  const { id } = useParams()
  const { data } = useFetch<CartItem>('https://65b97a6eb71048505a8ae40f.mockapi.io/api/products/' + id)
  const { addToCart } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

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
          <span className="price">{data?.price}$</span>
          <span className="discount">-20%</span>
          <div className="deliveryInfo">5$ Delivery Fees, Available Nationally, Delivered in 3 Days Maximum.</div>
          <span className="stockStatus">In Stock</span>

          <input className="quantityInput" type="number" defaultValue="1" onChange={(e) => setQuantity(Number(e.target.value))} />
          <button onClick={() => data && addToCart(data, quantity)}>BUY</button>
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