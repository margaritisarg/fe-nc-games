import { useEffect, useState } from "react"

import Review from "../GenericComponents/Review"

import * as api from '../../api'

const ListOfReviews = ({categorySearchParams, orderSearchParams, sortBySearchParams}) => {

    const [reviews, setReviews] = useState()
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        api.fetchAllReviews(categorySearchParams, orderSearchParams, sortBySearchParams).then((reviews) => {
            setReviews(reviews)
            setIsLoading(false)
        })
    }, [reviews])

    return (
        <>
            {isLoading 
            ? <p>Loading</p> 
            : reviews.map(review => <Review key={review.review_id} review={review} />)}
        </>
    )
}

export default ListOfReviews