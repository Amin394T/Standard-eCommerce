import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

import "./ProductDetails.css";
import { useCart } from "../../contexts/CartContext";
import api from "../../utilities/axios-interceptor";
import { Product } from "../../utilities/product-types";
import ProductCarousel from "../ProductCarousel/ProductCarousel";
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

  // TODO: Replace with actual multiple images when available
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

          <img src={imageURL + (selectedImage || product?.image)} alt="Selected Image" />

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

          {product?.specification && Object.keys(product.specification).length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Specification</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(product.specification).map(([specKey, specValue]) => (
                  <tr key={specKey}>
                    <td>{specKey}</td>
                    <td>
                      {specValue === null || specValue === undefined
                        ? "-"
                        : typeof specValue === "object"
                        ? JSON.stringify(specValue)
                        : String(specValue)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : null}
        </div>

        <div className="purchase-section">
          <span className="price">{`${product?.price}$`}</span>
          <span className="discount">{`-${product?.discount}%`}</span>
          <div className="delivery-info">{`${product?.delivery.cost}$ Delivery Fees`}<br />{`Available in ${product?.delivery.range}`}<br />{`Delivered in ${product?.delivery.time} Max`}<br />{`Returns Accepted Within ${product?.policy.period}`}</div>
          <span className="stock-status">{product?.status.replace(/-/g, " ").toUpperCase()}</span>

          <input className="quantity-input" type="number" defaultValue="1" onChange={(e) => setQuantity(Number(e.target.value))} />
          <button onClick={() => product && addToCart({ ...product, quantity })}>BUY</button>
        </div>
      </div>


      <div className="secondary-row">
        <UserReview product={product?.reference}/>
      </div>

      <div className="related-products">
        <ProductCarousel products={relatedProducts || null} itemsToShow={5} />
      </div>

    </div>
  )
}

export default ProductDetails;