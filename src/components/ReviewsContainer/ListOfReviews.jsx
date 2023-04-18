import { useEffect, useState } from "react"

import Review from "./Review"

import * as api from '../../api'

const ListOfReviews = () => {

    const [reviews, setReviews] = useState()
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        api.fetchAllReviews().then((reviews) => {
            setReviews(reviews)
            setIsLoading(false)
        })
    }, [])

    return (
        <>
            {isLoading 
            ? <p>Loading</p> 
            : reviews.map(review => <Review key={review.review_id} review={review} />)}
        </>
    )
}

export default ListOfReviews