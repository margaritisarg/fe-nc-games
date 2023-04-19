import axios from 'axios';

const reviewsURL = axios.create({
    baseURL: 'https://gamesmarsncapi.onrender.com/api'
})

export const fetchAllReviews = () => {
    return reviewsURL.get('/reviews').then((response) => {
        return response.data.allReviews
    })
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