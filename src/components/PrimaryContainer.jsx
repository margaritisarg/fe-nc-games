import { Route, Routes } from 'react-router-dom';

import Header from "./Header"
import Nav from "./Nav"
import ReviewsContainer from "./ReviewsContainer/ReviewsContainer"

import contentsContainer from './css/contentsContainer.module.css'
import SingleReviewContainer from './SingleReviewContainer/SingleReviewContainer';

const PrimaryContainer = () => {
    return(
        <div>
            <Nav/>
            <Header></Header>
            <Routes>
                <Route path="/" element={
                    <div className={`${contentsContainer.contents}`}><ReviewsContainer/></div>
                    }/>
                <Route path="/review/:review_id" element={
                    <div className={`${contentsContainer.contents}`}><SingleReviewContainer/></div>
                    }/>
            </Routes>
        </div>
    )
}

export default PrimaryContainer