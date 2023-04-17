import Review from "./Review"

const ListOfReviews = ({reviews}) => {
    return (
        <div>
            <p>List of reviews</p>
            {reviews ? reviews.map(review => <Review key={review.review_id} review={review} />) : <p>Loading</p>}
        </div>
    )
}

export default ListOfReviews