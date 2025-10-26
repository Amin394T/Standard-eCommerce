function Rating({ ratingsCount }: { ratingsCount: { rating: number; count: number }[] }) {
  const totalRatings = ratingsCount.reduce((acc, { count }) => acc + count, 0);
  const averageRating = ratingsCount.reduce((acc, { rating, count }) => acc + rating * count, 0) / totalRatings;

  return (
    <div className="rating">
      <div className="overall-rating">Rating: {averageRating.toFixed(2)} / 5</div>
      <div className="rating-bars">

        {[5, 4, 3, 2, 1].map((stars) => {
          const rating = ratingsCount.find((rating) => rating.rating === stars);
          const count = rating ? rating.count : 0;
          const percentage = (count / totalRatings) * 100 || 0;

          return (
            <div key={stars} className="rating-bar">
              <div className="stars">{stars} Stars</div>
              <div className="bar-container">
                <div className="bar" style={{ width: `${percentage}%` }}></div>
                <span className="count">{count}</span>
              </div>
            </div>
          )
        })}

      </div>
    </div>
  )
}

export default Rating;