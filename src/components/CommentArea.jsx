
import { useState, useEffect} from 'react'
import CommentList from './subcomments/CommentsList'
import AddComment from './subcomments/AddComment'
import Loading from './subcomments/Loading'
import Error from './subcomments/Error'
import { Row, Image } from 'react-bootstrap'

const CommentArea =({ book }) => { 

    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
   

    useEffect (()=> {
        const getComments =async ()=> {
        setIsLoading(true)

        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + book.asin, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI3OWY5NTgxNmI1YjAwMTU5NDA3NDAiLCJpYXQiOjE2MjI2NDY2NzcsImV4cCI6MTYyMzg1NjI3N30.y-rBwB5WAQOWBvWrLlAgTQUrbGulxd2M6cWH3VLyGLw'
                }
            })
            console.log(response)
            if (response.ok) {
                let comments = await response.json()
                setComments(comments)
                setIsLoading(false)
                setIsError(false)
            
            } else {
                console.log('error')
                setIsLoading(false)
                setIsError(true)
            }
        } catch (error) {
            console.log(error)
            setIsError(true)
            setIsLoading(false)
        }
        }
        getComments()  
    }, [book.asin])
        return (
                <>
                    <Row >
                        <Image src={book.img} style={{ height:"200px" , width: "150px", objectFit:"cover" }} fluid/>
                    </Row>
                    <Row >
                         {isLoading && <Loading />}
                    {isError && <Error />}
                    <AddComment asin={book.asin} />
                    <CommentList commentsToShow={comments} />
                    </Row>
                   
                </>
            
        )
    
}

export default CommentArea