import axios from 'axios';

const reviewsURL = axios.create({
    baseURL: 'https://gamesmarsncapi.onrender.com/api'
})

export const fetchAllReviews = (categorySearchParams, orderSearchParams=null, sortBySearchParams=null) => {
    if(categorySearchParams === null){
        return reviewsURL.get('/reviews').then((response) => {
            return response.data.allReviews
        })
    }else{
        const params = {params:{category:categorySearchParams, order:orderSearchParams, sort_by:sortBySearchParams}}
        return reviewsURL.get(`/reviews`, params).then((response) => {
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

export const deleteComment = (comment_id) => {
    return reviewsURL.delete(`comments/${comment_id}`)
}