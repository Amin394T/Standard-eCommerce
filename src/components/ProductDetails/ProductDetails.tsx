import "./ProductDetails.css"
import { useParams } from "react-router-dom"
import { useCart } from "../../utilities/contexts/CartContext"
import { useState } from "react"
import Rating from "./Rating"
import UserReview from "./UserReview"
import ProductCarousel from "../ProductCarousel/ProductCarousel"
import { Product } from "../../utilities/types/product-types"
import { useQuery } from "react-query"


async function fetchProduct(id: string | undefined) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/products/${id}`);
  if (!response.ok) throw new Error("Failed to fetch product");
  return response.json();
}

async function fetchRelatedProducts(id: string | undefined) {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/products/`);
  if (!response.ok) throw new Error("Failed to fetch related products");
  return response.json();
}

function ProductDetails() {
  const { id } = useParams()

  const { data, isLoading, isError } = useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: async () => fetchProduct(id),
    enabled: !!id,
    staleTime: 1000 * 60 * 2,
  });

  const { data: relatedProducts } = useQuery<Product[], Error>({
    queryKey: ["relatedProducts"],
    queryFn: async () => fetchRelatedProducts(id),
    staleTime: 1000 * 60 * 5,
  });


  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)

  const images = [ data?.image, data?.image, data?.image ]
  const [selectedImage, setSelectedImage] = useState(images[0])

  let handleImageClick = (image: string | undefined) => {
    setSelectedImage(image)
  }


  if (isLoading) return <div className="loading-spinner">Loading ...</div>;
  if (isError) return <div className="error-message"> Error loading product </div>;

  return (
    <div className="details-page"> 
      <div className="primary-row">
        <div className="images-section">

          <img src={selectedImage || data?.image} alt="Selected Image" />

          <div className="image-gallery">
            {images.map((image, index) => (
              <img key={index} src={image} alt={`Image ${index}`} onMouseOver={() => handleImageClick(image)} />
            ))}
          </div>
        </div>

        <div className="details-section">
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

        <div className="purchase-section">
          <span className="price">{data?.price}$</span>
          <span className="discount">-20%</span>
          <div className="delivery-info">5$ Delivery Fees<br />Available Nationally<br />Delivered in 3 Days Max<br />Returns Accepted Within 2 Weeks</div>
          <span className="stock-status">In Stock</span>

          <input className="quantity-input" type="number" defaultValue="1" onChange={(e) => setQuantity(Number(e.target.value))} />
          <button onClick={() => data && addToCart({ ...data, quantity })}>BUY</button>
        </div>
      </div>


      <div className="secondary-row">
        <Rating />
        <div className="reviews">
          <UserReview />
          <UserReview />
          <UserReview />
        </div>

      </div>

      <div className="related-products">
        <ProductCarousel {...{ products: relatedProducts || null, itemsToShow: 5 }} />
      </div>

    </div>
  )
}

export default ProductDetails