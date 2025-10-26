import { useQuery } from "react-query";
import type { Review } from "../../utilities/product-types";
import api from "../../utilities/axios-interceptor";

function Review({ product }: { product: string | undefined }) {
  const { data, isLoading, isError } = useQuery<Review[], Error>({
    queryKey: ["review", product],
    queryFn: () => api.get("/reviews/" + product),
    enabled: !!product,
  });


  if (isLoading) return <div className="loading-spinner">Loading ...</div>;
  if (isError) return <div className="error-message"> Error loading reviews </div>;

  return (
    <div className="reviews">
      { data?.map((review, index) => (
        <div className="user-review" key={index}>
          <div className="meta-review">
            <span>
              <div className="reviewer-name">{review.user?.username || "Anonymous"}</div>
              <div className="review-date">{new Date(review.date).toLocaleDateString()}</div>
            </span>
            <span className="reviewer-rating">{review.rating || 0} / 5</span>
          </div>
          <p className="review">{review.comment || "No review available."}</p>
        </div>
      )) }
    </div>
  )
}

export default Review;