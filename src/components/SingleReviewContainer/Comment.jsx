import commentCSS from './css/commentCard.module.css'

import * as api from '../../api'
import { useState } from 'react'

const Comment = ({comment}) => {
    const time = comment.created_at.slice(0,10)
    const [deleting, setDeleting] = useState(false)

    function handleDelete(){
        setDeleting(true)
        api.deleteComment(comment.comment_id).then(() => {
            setDeleting(false)
        })
    }

    return(
        <main className={`${commentCSS.commentCard}`}>
            <p>{comment.author}</p>
            <p>{comment.votes}</p>
            <p>{time}</p>
            <div className={commentCSS.span2}><p>{comment.body}</p></div>
            {deleting
            ? <p className={commentCSS.span2}>Deleting...</p>
            :   
                <div className={commentCSS.span2}>
                    {comment.author === 'tickle122'
                    ?<button onClick={handleDelete}>Delete</button>
                    :<></>}
                </div>}
        </main>
    )
}

export default Comment

