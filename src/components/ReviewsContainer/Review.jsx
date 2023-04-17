import ButtonComments from "./ButtonComments"
import ButtonVote from "./ButtonVote"

const Review = ({review}) => {
    return (
        <div>
            <p>{review.title}</p>
            <p>{review.owner}, {review.category}, {review.comment_count}</p>
            <ButtonComments/>
            <ButtonVote/>
        </div>
    )
}

export default Review