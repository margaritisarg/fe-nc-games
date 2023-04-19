
import { useState } from 'react'
import * as api from '../../api'

const ButtonVote = ({review_id, setVote}) => {
    
    const [isError, setIsError] = useState(false)

    function handleVote(vote){
        setVote((currentVotes) => currentVotes + vote.votes)
        api.patchVote(review_id, vote).then(() => {
            setIsError(false)
        }).catch(() => {
            setIsError(true)
        })
    }
    if (isError) return <p>No internet connection</p>
    return(
        <div>
            <button onClick={() => handleVote({votes:1})}>Up vote</button>
            <button onClick={() => handleVote({votes:-1})}>Down vote</button>
        </div>
    )
}

export default ButtonVote