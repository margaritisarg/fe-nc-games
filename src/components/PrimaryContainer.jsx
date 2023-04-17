import Header from "./Header"
import Nav from "./Nav"
import ReviewsContainer from "./ReviewsContainer/ReviewsContainer"

const PrimaryContainer = () => {
    return(
        <div>
            <Nav/>
            <Header></Header>
            <ReviewsContainer/>
        </div>
    )
}

export default PrimaryContainer