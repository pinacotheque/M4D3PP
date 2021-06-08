
import { ListGroup } from 'react-bootstrap'
import SingleComment from './SingleComment'

const CommentList = ({ commentsToShow }) => (
    <ListGroup  className="pb-5" style={{ color: 'black' }}>
        {
            commentsToShow.map(comment => (
                <SingleComment comment={comment} key={comment._id} />
            ))
        }
    </ListGroup>
)

export default CommentList
