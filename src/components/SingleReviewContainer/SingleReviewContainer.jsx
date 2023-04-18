import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Review from "../GenericComponents/Review"
import ListOfComments from "./ListOfComments"

import * as api from '../../api'


const SingleReviewContainer = () => {
    
    const [review, setReview] = useState()
    const [isLoading, setIsLoading] = useState(true)

    const [comments, setComments] = useState()
    const [isLoadingComments, setIsLoadingComments] = useState(true)

    const { review_id } = useParams()

    useEffect(() => {
        api.fetchReviewByID(review_id).then((review) => {
            setReview(review)
            setIsLoading(false)
        })
    }, [])

    useEffect(() => {
        api.fetchCommentsByID(review_id).then((comments) => {
            setComments(comments)
            setIsLoadingComments(false)
        })
    }, []) //will change empty array once 'add comment form' is added.

    return(
        <>
            {isLoading 
            ? <p>Loading</p> 
            : reviews.map(review => <Review key={review.review_id} review={review} />)}

            {isLoadingComments
            ? <p>Loading</p>
            : <ListOfComments comments={comments}/>}
        </>
    )
}

export default SingleReviewContainer