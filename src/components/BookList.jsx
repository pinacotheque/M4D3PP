import React from 'react'
import SingleBook from './SingleBook'
import { Col, Container, Form, Row } from 'react-bootstrap'
import CommentArea from './CommentArea'

class BookList extends React.Component {

    state = {
        searchQuery: '',
        commentSec: false,
    }

    render() {
        return (
            <Container>
                <Row>
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
                {/* { this.state.commentSec && <CommentArea  asin={this.props.book.asin} book= {this.props.book}/>} */}
                <Row>
                    {
                        this.props.books.filter(b => b.title.toLowerCase().includes(this.state.searchQuery)).map(book => (
                            <Col xs={3} key={book.asin}>
                                <SingleBook key={book.asin} book={book} onBookSelected={(book)=> this.setState({commentSec:book})}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        )
    }

}

export default BookList
