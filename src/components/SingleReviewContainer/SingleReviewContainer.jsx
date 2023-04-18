import { useEffect, useState } from "react"
import { useParams } from "react-router"

import Review from "../GenericComponents/Review"

import * as api from '../../api'

const SingleReviewContainer = () => {
    
    const [reviews, setReviews] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const { review_id } = useParams()

    useEffect(() => {
        api.fetchReviewByID(review_id).then((reviews) => {
            setReviews(reviews)
            setIsLoading(false)
        })
    }, [])

    return(
        <>
            {isLoading 
            ? <p>Loading</p> 
            : reviews.map(review => <Review key={review.review_id} review={review} />)}
        </>
    )
}

export default SingleReviewContainer