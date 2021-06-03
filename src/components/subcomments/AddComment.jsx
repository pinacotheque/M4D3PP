
import {Component} from 'react'
import {Form} from 'react-bootstrap'

class AddComment extends Component {
    state={
        comment:{
            text:"",
            rate: 1,
            id:""
        }
    }

    inputChange = (e)=>{
        let id=e.target.id

        this.setState({
            comment: {
                ...this.state.comment,
            }
        })
    }

    submitReservation = async (e) => {
        e.preventDefault()
        console.log("Comments are about to submitted")
        console.log(this.state.reservation)
        // we're about to use fetch()
        // fetch() is always going to return you a Promise
        // a Promise is an asynchronous operation: you know when it starts,
        // you don't know when it ends

        // async/await
        // .then()

        try {
            let response = await fetch("https://striveschool.herokuapp.com/api/reservation", {
                method: 'POST',
                body: JSON.stringify(this.state.reservation),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            console.log(response.ok) // the ok property from the fetch() is going to tell you if the operation was successfull
            if (response.ok) {
                alert('Reservation saved!')
                this.setState({
                    reservation: {
                        name: '',
                        phone: '',
                        numberOfPersons: 1,
                        smoking: false,
                        dateTime: '',
                        specialRequests: ''
                    }
                })
            } else {
                // this is going to catch a server problem
                // i.e: server is down, db has a problem
                alert('Houston we had a problem, try again!')
            }
        } catch (error) {
            // if we fall here it means we don't have connection
            // or maybe the url is not quite right
            console.log(error)
        }

        // fetch("https://striveschool.herokuapp.com/api/reservation")
        //     .then(response => console.log(response.ok))
        //     .catch(error => console.log(error))

    }

    render(){
        return(
            <Form className="mb-5" onSubmit={(e) => this.submitReservation(e)}>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </Form.Control>
                </Form.Group>
            </Form>
        )

    }

}

export default AddComment