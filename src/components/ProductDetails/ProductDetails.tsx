import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import "./ProductDetails.css";
import { useCart } from "../../contexts/CartContext";
import api from "../../utilities/axios-interceptor";
import { Product } from "../../utilities/product-types";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
import Rating from "./Rating";
import UserReview from "./UserReview";


function ProductDetails() {
  const { id } = useParams();
  const imageURL = import.meta.env.VITE_IMG_URL + "/";

  const { data: product, isLoading, isFetching, isError } = useQuery<Product, Error>({
    queryKey: ["product", id],
    queryFn: () => api.get("/products/" + id),
    enabled: !!id,
    staleTime: 1000 * 60 * 2,
  });

  const { data: relatedProducts } = useQuery<Product[], Error>({
    queryKey: ["relatedProducts"],
    queryFn: () => api.get("/products/"),
    staleTime: 1000 * 60 * 15,
  });


  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const images = [product?.image, product?.image, product?.image];
  const [selectedImage, setSelectedImage] = useState(product?.image);

  let handleImageClick = (image: string | undefined) => {
    setSelectedImage(image);
  }


  if (isLoading || isFetching) return <div className="loading-spinner">Loading ...</div>;
  if (isError) return <div className="error-message"> Error loading product </div>;

  return (
    <div className="details-page">
      <div className="primary-row">
        <div className="images-section">

          <img src={imageURL + selectedImage || product?.image} alt="Selected Image" />

          <div className="image-gallery">
            {images.map((image, index) => (
              <img key={index} src={imageURL + image} alt={`Image ${index}`} onMouseOver={() => handleImageClick(image)} />
            ))}
          </div>
        </div>

        <div className="details-section">
          <div className="title">{product?.name}</div>
          <div className="category">{product?.category}</div>
          <div className="description">{product?.description}</div>

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
          <span className="price">{product?.price}$</span>
          <span className="discount">-20%</span>
          <div className="delivery-info">5$ Delivery Fees<br />Available Nationally<br />Delivered in 3 Days Max<br />Returns Accepted Within 2 Weeks</div>
          <span className="stock-status">In Stock</span>

          <input className="quantity-input" type="number" defaultValue="1" onChange={(e) => setQuantity(Number(e.target.value))} />
          <button onClick={() => product && addToCart({ ...product, quantity })}>BUY</button>
        </div>
      </div>


      <div className="secondary-row">
        <Rating />
        
          <UserReview product={product?.reference}/>

      </div>

      <div className="related-products">
        <ProductCarousel products={relatedProducts || null} itemsToShow={5} />
      </div>

    </div>
  )
}

export default ProductDetails;