import { useNavigate } from "react-router"

const ButtonComments = ({reviewID}) => {
    
    const navigate = useNavigate()
    function singleReviewPage(){
        navigate(`/review/${reviewID}`)
    }

    return(
        <div>
            <button onClick={singleReviewPage}>Comments</button>
        </div>
    )
}

export default ButtonComments
