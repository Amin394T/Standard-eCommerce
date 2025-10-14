const ratings = [
    { stars: 5, count: 32 },
    { stars: 4, count: 18 },
    { stars: 3, count: 5 },
    { stars: 2, count: 2 },
    { stars: 1, count: 9 },
]
// TO-DO: turn this into a property of CartItem and pass as prop

function Rating() {
    const ratingsCount = ratings.reduce((acc, rating) => acc + rating.count, 0)
    const averageRating = ratings.reduce((acc, rating) => acc + rating.stars * rating.count, 0) / ratingsCount

    return (
        <div className="rating">
            <div className="overall-rating">Rating: {averageRating.toFixed(2)} / 5</div>
            <div className="rating-bars">
                {[5, 4, 3, 2, 1].map((stars) => {
                    const rating = ratings.find((rating) => rating.stars === stars)
                    const count = rating ? rating.count : 0
                    const percentage = (count / ratingsCount) * 100 || 0
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

export default Rating