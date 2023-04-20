import { useParams } from "react-router-dom"

import ListOfReviews from "./ListOfReviews"

const ReviewsContainer = () => {

    const { categoryParams } = useParams()

    return (
        <>
            <ListOfReviews currentCategory={categoryParams}/>
        </>
    )
}

export default ReviewsContainer