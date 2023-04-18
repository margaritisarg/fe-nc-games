import Comment from "./Comment"

const ListOfComments = ({comments}) => {
    return(
        <>
            {comments.length === 0
            ? <p>No comments</p>
            : comments.map(comment => <Comment key={comment.comment_id} comment={comment}/>)}
        </>
    )
}

export default ListOfComments