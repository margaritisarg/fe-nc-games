import ButtonComments from "../ReviewsContainer/ButtonComments"
import ButtonVote from "../ReviewsContainer/ButtonVote"

import reviewCardCSS from './css/reviewCard.module.css'

const Review = ({review}) => {

    return (
        <div className={reviewCardCSS.reviewCard}>
            <p className={reviewCardCSS.span2}>{review.title}</p>
            <p>{review.owner}</p>
            <p>{review.category}</p>
            <div className={reviewCardCSS.span2}><img src={review.review_img_url}/> </div>
            <p className={reviewCardCSS.span2}>{review.comment_count}</p>
            <div className={`${reviewCardCSS.span2}`}><ButtonVote/></div>
            <div className={
                `${reviewCardCSS.span2} ${reviewCardCSS.spacingTop} ${reviewCardCSS.spacingBottom}`
                }><ButtonComments reviewID={review.review_id}/>
            </div>
        </div>
    )
}

export default Review