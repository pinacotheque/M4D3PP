import { Component } from 'react'
import {Container, Row, ListGroup} from 'react'


class SingleComment extends Component{
    render(){
        return 
            <Container>
                <Row>
                        <ListGroup>
                            
                            {/* {comments.map(c => (
                            <ListGroup.Item key={c.id}>{c.comment}</ListGroup.Item>
                            ))}  */}
                        </ListGroup>
               </Row>
          </Container> 
    
    }
       
}

export default SingleComment