import { useState } from 'react'
import * as api from '../../api'

import formCommentCSS from './css/formComment.module.css'

const FormComment = () => {

    const [body, setBody] = useState('')
    const [isError, setIsError] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)

    function handleSubmit(event){
        event.preventDefault();
        setIsRefreshing(true)
        api.postComment({username: "tickle122", body}).then(() => {
            setIsError(false)
            setIsRefreshing(false)
        }).catch(() => {
            setIsError(true)
        })
        setBody('')
    }

    if (isError) return <p>No internet connection. Can't add a comment</p>
    if (isRefreshing) return <p>Getting latest comment</p>
    return(
        <div>
            <form className={formCommentCSS.form} onSubmit={handleSubmit}>
                <section>
                    <input type="text" placeholder="Comment" 
                        value={body} onChange={(e) => setBody(e.target.value)}
                    />
                </section>

            {body === '' 
            ? <p>Add a comment</p>
            :<button onClick={handleSubmit}>Submit</button>}

            </form>
            <br/>
        </div>
    )
}

export default FormComment