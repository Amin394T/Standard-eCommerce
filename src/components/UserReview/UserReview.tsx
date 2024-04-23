import "./UserReview.css"

function Review() {
    return (
        <div className="userReview">
            <div className="metaReview">
                <span>
                    <div className="reviewerName">Human Person</div>
                    <div className="reviewDate">3 months ago</div>
                </span>
                <span className="reviewerRating">4 / 5</span>
            </div>
            <p className="review">Decent product, customer service was good, although the packaging could use some work. Would recommend.</p>
        </div>
    )
}

export default Review