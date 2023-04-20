import axios from 'axios';

const reviewsURL = axios.create({
    baseURL: 'https://gamesmarsncapi.onrender.com/api'
})

export const fetchAllReviews = (category) => {
    if(category === 'all' || category === undefined){
        return reviewsURL.get('/reviews').then((response) => {
            return response.data.allReviews
        })
    }else{
        return reviewsURL.get(`/reviews?category=${category}`).then((response) => {
            return response.data.queriedReviews
        })
    }
}

export const fetchReviewByID = (review_id) => {
    return reviewsURL.get(`/reviews/${review_id}`).then((response) => {
        return response.data.ReviewsByID
    })
}

export const fetchCommentsByID = (review_id) => {
    return reviewsURL.get(`/reviews/${review_id}/comments`).then((response) => {
        if(response.data.length === 0) return []
        else return response.data.commentsByReviewID
    })
}

export const patchVote = (review_id, vote) => {
    return reviewsURL.patch(`/reviews/${review_id}`, vote)
}

export const fetchCategories = (all=false) => {
    return reviewsURL.get('/categories').then((response) => {
        const categories = response.data.AllCategories.map(c => c.slug)
        if(all) return ['all', ...categories]
        else return [...categories]
    })
}
export const postComment = (comment, review_id) => {
    return reviewsURL.post(`/reviews/${review_id}/comments`, comment)

}