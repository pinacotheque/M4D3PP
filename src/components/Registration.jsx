import {Button, Form,Col} from 'react-bootstrap'
import {useState} from 'react'



const Registration = () => {

    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


   const handleSubmit =(event) =>{
        alert('A name was submitted: ');
        event.preventDefault();
      }
    const changeHandler =(event) =>{

    }
    
return(
        <Col className={'w-100'}>
        <Form className={'mt-5 mx-5'} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
        <Form.Label >Name:</Form.Label>
        
        <Form.Control value={name} type="text" placeholder="Normal text" onChange={changeHandler}/>
        <Form.Text className="text-muted">
        At least 2 characters
    </Form.Text>
        </Form.Group>
        
        <Form.Group controlId="formBasicEmail">
        <Form.Label>Surname:</Form.Label>
        <Form.Control value={surname} type="text" placeholder="Normal text" />
        <Form.Text className="text-muted">
        At least 3 characters
    </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address:</Form.Label>
            <Form.Control value={email} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password:</Form.Label>
            <Form.Control value={password} type="password" placeholder="Password" />
            <Form.Text className="text-muted">
            Should contain at least 8 chars, 1 digit, 1 letter
    </Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>Password confirmation:</Form.Label>
            <Form.Control type="password" placeholder="Password" />
            
        </Form.Group>
        
        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </Col>
)

}

export default Registration



