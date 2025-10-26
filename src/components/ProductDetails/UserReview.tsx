import { useQuery } from "react-query";

import type { Review } from "../../utilities/product-types";
import api from "../../utilities/axios-interceptor";
import Rating from "./Rating";


function Review({ product }: { product: string | undefined }) {
  const { data, isLoading, isError } = useQuery<Review[], Error>({
    queryKey: ["review", product],
    queryFn: () => api.get("/reviews/" + product),
    enabled: !!product,
  });

  if (isLoading) return <div className="loading-spinner">Loading ...</div>;
  if (isError) return <div className="error-message"> Error loading reviews </div>;

  const counts = data?.reduce<Record<number, number>>((acc, { rating }) => {
    acc[rating] = (acc[rating] || 0) + 1;
    return acc;
  }, {} as Record<number, number>) || {};

  const ratingsCount = Array.from({ length: 5 }, (_, i) => {
    const rating = 5 - i;
    return { rating, count: counts[rating] || 0 };
  });


  return (
    <>
      <Rating ratingsCount={ratingsCount} />
      
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
    </>
  )
}

export default Review;