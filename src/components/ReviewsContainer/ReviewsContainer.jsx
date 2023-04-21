import { useParams } from "react-router-dom"
import { useSearchParams } from 'react-router-dom';

import ListOfReviews from "./ListOfReviews"

const ReviewsContainer = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const categorySearchParams = searchParams.get('category');
    const orderSearchParams = searchParams.get('order');
    return (
        <>
            <ListOfReviews 
                categorySearchParams={categorySearchParams}
                orderSearchParams={orderSearchParams}
            />
        </>
    )
}

export default ReviewsContainer