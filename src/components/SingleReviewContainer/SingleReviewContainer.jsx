import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Review from "../GenericComponents/Review"

import * as api from '../../api'

const SingleReviewContainer = () => {
    
    const [review, setReview] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const {review_id} = useParams()
    useEffect(() => {
        api.fetchReviewByID(review_id).then((review) => {
            setReview(review)
            setIsLoading(false)
        })
    }, [])

    return(
        <>
            {isLoading 
            ? <p>Loading</p> 
            : <Review key={review[0].review_id} review={review[0]} />}
        </>
    )
}

export default SingleReviewContainer