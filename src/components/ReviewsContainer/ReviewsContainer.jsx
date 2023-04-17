import { useEffect, useState } from "react"

import DropdownMenu from "./DropdownMenu"
import ListOfReviews from "./ListOfReviews"

import * as api from '../../api'

const ReviewsContainer = () => {

    const [reviews, setReviews] = useState()

    useEffect(() => {
        api.fetchAllReviews().then((reviews) => {
            setReviews(reviews)
        })
    }, [])

    return (
        <div>
            <p>reviews container</p>
            <DropdownMenu/>
            <ListOfReviews reviews={reviews}/>
        </div>
    )
}

export default ReviewsContainer