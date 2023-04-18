
import commentCSS from './css/commentCard.module.css'

const Comment = ({comment}) => {
    const time = comment.created_at.slice(0,10)
    return(
        <main className={`${commentCSS.commentCard}`}>
            <p>{comment.author}</p>
            <p>{comment.votes}</p>
            <p>{time}</p>
            <div className={commentCSS.span2}><p>{comment.body}</p></div>
        </main>
    )
}

export default Comment

