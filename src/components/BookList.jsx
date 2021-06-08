import {Component} from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'

class BookList extends Component {

    // const [searchQuery, setSearchQuery] =useState([])
    // const [commentSec, setCommentSec] =useState(false)
    // const [selectedBook, setSelectedBook] =useState([])
    state = {
        searchQuery: '',
        commentSec: false,
        selectedBook: undefined,
    }

    render() {
        return (
            <Container fluid>
                <Row className="d-flex flex-row">
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Search</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Search here"
                                value={this.state.searchQuery}
                                onChange={e => this.setState({ searchQuery: e.target.value })}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row >

            <Col md={2} className="position-fixed">

               
               {this.state.selectedBook && <CommentArea asin={this.state.selectedBook.asin} book={this.state.selectedBook}/>}

            </Col>

                <Col md={10}  className="offset-2 d-flex flex-wrap">
                    {
                        this.props.books.filter(b => b.title.toLowerCase().includes(this.state.searchQuery)).map(book => (
                            <Col xs={3} key={book.asin} onClick={()=> this.setState({selectedBook: book})}>
                                <SingleBook  key={book.asin} book={book}/>
                           
                            </Col>   
                        ))
                    }
                </Col>
                </Row>
            </Container>
        )
    }

}

export default BookList
