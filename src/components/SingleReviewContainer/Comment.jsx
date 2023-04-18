
const Comment = ({comment}) => {
    console.log(comment)
    return(
        <main>
            <p>{comment.author}</p>
            <p>{comment.body}</p>
            <p>{comment.votes}</p>
            <p>{comment.created_at}</p>
        </main>
    )
}

export default Comment

