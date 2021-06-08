import {useState} from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'

const BookList =({books}) => {

    const [searchQuery, setSearchQuery] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)

    
        return (
            <Container fluid>
                <Row className="d-flex flex-row">
                    <Col>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Search</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Search here"
                                value={searchQuery}
                                onChange={e => setSearchQuery( e.target.value )}
                            />
                        </Form.Group>
                    </Col>
                </Row>
                
                <Row >

            <Col md={2} className="position-fixed align-items-center">

               
               {selectedBook && <CommentArea asin={selectedBook.asin} book={selectedBook}/>}

            </Col>

                <Col md={10}  className="offset-2 d-flex flex-wrap">
                    {
                        books.filter(b => b.title.toLowerCase().includes(searchQuery)).map(book => (
                            <Col xs={3} key={book.asin} onClick={()=> setSelectedBook( book)}>
                                <SingleBook  key={book.asin} book={book}/>
                           
                            </Col>   
                        ))
                    }
                </Col>
                </Row>
            </Container>
        )
    

}

export default BookList
