import { Container, Row } from 'react-bootstrap'
import SingleComment from './SingleComment'


const CommentsList = (props) => {
    <Container>
        <Row>
            <h4><SingleComment comment={props.comment}/></h4>
        </Row>
    </Container>
}

export default CommentsList