
import { Component } from 'react'
import CommentList from './subcomments/CommentsList'
import AddComment from './subcomments/AddComment'
import Loading from './subcomments/Loading'
import Error from './subcomments/Error'
import { Col, Row, Image } from 'react-bootstrap'

class CommentArea extends Component {

    state = {
        comments: [], // comments will go here
        isLoading: true,
        isError: false
    }

    componentDidMount = async () => {
        try {
            let response = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.asin, {
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGI3OWY5NTgxNmI1YjAwMTU5NDA3NDAiLCJpYXQiOjE2MjI2NDY2NzcsImV4cCI6MTYyMzg1NjI3N30.y-rBwB5WAQOWBvWrLlAgTQUrbGulxd2M6cWH3VLyGLw'
                }
            })
            console.log(response)
            if (response.ok) {
                let comments = await response.json()
                this.setState({ comments: comments, isLoading: false, isError: false })
            } else {
                console.log('error')
                this.setState({ isLoading: false, isError: true })
            }
        } catch (error) {
            console.log(error)
            this.setState({ isLoading: false, isError: true })
        }
    }
   
    render() {
        return (
            
            
                <>
                    <Row >
                        <Image src={this.props.book.img} style={{ height:"200px" , width: "150px", objectFit:"cover" }} fluid/>
                    </Row>
                    <Row >
                         {this.state.isLoading && <Loading />}
                    {this.state.isError && <Error />}
                    <AddComment asin={this.props.asin} />
                    <CommentList commentsToShow={this.state.comments} />
                    </Row>
                   
                </>
            
        )
    }
}

export default CommentArea