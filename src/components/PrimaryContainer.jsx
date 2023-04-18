import { Route, Routes } from 'react-router-dom';

import Header from "./Header"
import Nav from "./Nav"
import ReviewsContainer from "./ReviewsContainer/ReviewsContainer"

import contentsContainer from './css/contentsContainer.module.css'

const PrimaryContainer = () => {
    return(
        <div>
            <Nav/>
            <Header></Header>
            <Routes>
                <Route path="/" element={
                    <div className={`${contentsContainer.contents}`}><ReviewsContainer/></div>
                    }/>
            </Routes>
        </div>
    )
}

export default PrimaryContainer