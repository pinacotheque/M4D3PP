import React from 'react'
import { Card } from 'react-bootstrap'
import {useState} from 'react'

const SingleBook = (props)=> {

    const [selected, setSelected] = useState(false)
   
        return (
            <>
                <Card
                    onClick={() =>  setSelected(!selected)}
                    style={{ border: selected ? '3px solid gray' : 'none' }}
                >
                    <Card.Img variant="top" src={props.book.img} />
                    <Card.Body>
                        <Card.Title style={{ color: 'black' }}>{props.book.title}</Card.Title>
                    </Card.Body>
                </Card> 
            </>
        )

}

export default SingleBook