import { Link } from "react-router-dom"

const ButtonComments = ({reviewID}) => {

    return(
        <div>
            <Link to={`/review/${reviewID}`}>More</Link>
        </div>
    )
}

export default ButtonComments
