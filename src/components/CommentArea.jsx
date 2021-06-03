import {Component} from 'react'
import {Button,Card, Container,Row } from 'react-bootstrap'
import addComments from './subcomments/AddComment'
import listComments from './subcomments/CommentsList'


class CommentArea extends Component {
    state ={
        selected: null,
    }

    componentDidMount = async () =>{
        const url= "https://striveschool-api.herokuapp.com/api/comments/"
        const key = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGFlNDE5ZWNlYWY0ODAwMTVjOTE4NzIiLCJpYXQiOjE2MjI3MjY1MDcsImV4cCI6MTYyMzkzNjEwN30.0MYIhamMSFpIySy17fS2JHxc0CvnImc6tAokmi6cNrg"
        try {
            let response = await fetch(url.anchor,{
                "Authorization": key
            })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    render(){
        return(
            <Container>
                <Row>
                    {listComments.map((list,index)=>(
                        <Card className="text-center">
                        <Card.Body>
                          <Card.Title>{list.comment}</Card.Title>
                          <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                          </Card.Text>
                          <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">2 days ago</Card.Footer>
                      </Card>
                    ))}
                </Row>
            </Container>
        )
    }
}

export default CommentArea