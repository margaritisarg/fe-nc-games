import axios from 'axios';

const reviewsURL = axios.create({
    baseURL: 'https://gamesmarsncapi.onrender.com/api'
})

export const fetchAllReviews = () => {
    return reviewsURL.get('/reviews').then((response) => {
        return response.data.allReviews
    })
}