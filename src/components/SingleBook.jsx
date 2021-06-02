
import {Container, Row, Card, Button} from 'react-bootstrap'

const SingleBook =(props) => (
        
<Container>
   <Row className="justify-content-center mt-3"> 
    
    {props["name"].map ((book,index) => ( 
       // this.setState={selected: book}
       <Card className="mt-3 mx-3" key={index}  style={{ width: '14rem'}}>
       <Card.Img variant="top" src={book.img} />
       <Card.Body>
           <Card.Title>{book.title}</Card.Title>
           <Card.Text>
           <p>{book.category}</p> 
           <span>{book.price}</span>
           </Card.Text>
           <Button variant="primary">Buy</Button>
       </Card.Body>
       </Card>))
       }
       </Row>
       </Container>
)

export default SingleBook