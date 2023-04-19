import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import Review from "../GenericComponents/Review"
import ListOfComments from "./ListOfComments"

import * as api from '../../api'
import FormComment from "./FormComment"


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
    }, [review])

    useEffect(() => {
        api.fetchCommentsByID(review_id).then((comments) => {
            setComments(comments)
            setIsLoadingComments(false)
        })
    }, [comments]) 

    return(
        <>
            {isLoading 
            ? <p>Loading</p> 
            : <Review key={review[0].review_id} review={review[0]} />}

            {isLoadingComments
            ? <p>Loading</p>
            : <>
                <ListOfComments comments={comments}/> 
                <FormComment />
              </>}
        </>
    )
}

export default SingleReviewContainer