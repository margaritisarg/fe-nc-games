import { useLocation } from "react-router"
import { useState } from "react"

import ButtonComments from "../ReviewsContainer/ButtonComments"
import ButtonVote from "../ReviewsContainer/ButtonVote"

import reviewCardCSS from './css/reviewCard.module.css'


const Review = ({review}) => {
    const location = useLocation()
    const [vote, setVote] = useState(review.votes)

    return (
        <div className={reviewCardCSS.reviewCard}>
            <p className={reviewCardCSS.span2}>{review.title}</p>
            <p>{review.owner}</p>
            <p>{review.category}</p>
            <div className={reviewCardCSS.span2}><img src={review.review_img_url}/> </div>
            <p className={reviewCardCSS.span2}>Votes: {vote}</p>
            <p className={`${reviewCardCSS.span2} ${reviewCardCSS.spacingLeftRight}`}>{review.review_body}</p>
            <div className={`${reviewCardCSS.span2}`}>
                <ButtonVote review_id={review.review_id} setVote={setVote}/>
            </div>
            <div className={`${reviewCardCSS.span2}`}>
                <p>Comments: {review.comment_count}</p>
            </div>
            <div className={`${reviewCardCSS.span2}`}>
                <p>{review.created_at.slice(0,10)}</p>
            </div>
            {location.pathname.includes("/review?")
            ? <></>
            :<div className={
                `${reviewCardCSS.span2} ${reviewCardCSS.spacingTop} ${reviewCardCSS.spacingBottom}`
                }><ButtonComments reviewID={review.review_id}/>
             </div>}


        </div>
    )
}

export default Review