import { useSearchParams } from 'react-router-dom';

import ListOfReviews from "./ListOfReviews"

const ReviewsContainer = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const categorySearchParams = searchParams.get('category');
    const orderSearchParams = searchParams.get('order');
    const sortBySearchParams = searchParams.get('sort_by');
    return (
        <>
            <ListOfReviews 
                categorySearchParams={categorySearchParams}
                orderSearchParams={orderSearchParams}
                sortBySearchParams={sortBySearchParams}
            />
        </>
    )
}

export default ReviewsContainer