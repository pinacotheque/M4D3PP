import {Form, FormControl, Button} from 'react-bootstrap'
import {Component} from 'react'
import fantasyBooks from '../data/fantasy.json'
import SingleBook from './SingleBook'

class FilterBooklist extends Component {

    state = {
        search: "",
        books: [],
    }

    inputChange = (e) => {

        this.setState({

                search: e.target.value

        })
    }

    searchBooks =(e)=>{
        e.preventDefault()
        console.log(fantasyBooks.filter(book => book["title"].includes(this.state.search)).map(filterBook => (<SingleBook name={filterBook}/> )))
        // fantasyBooks.filter(book => book["title"].includes(this.state.search)).map(filterBook => (<SingleBook name={filterBook}/> ))
        
        let filterBooks = fantasyBooks.filter(book => book["title"].includes(this.state.search))
        console.log(filterBooks)
         this.setState({books:filterBooks})
    }

    render() {
      return (<>  <Form inline onSubmit={(e) => this.searchBooks(e)}>
            <FormControl id="search" 
                type="text" 
                value={this.state.search} 
                placeholder="Search" 
                className="mr-sm-2 my-3"  
                onChange={e => this.inputChange(e)}/>

            <Button variant="outline-success" type="submit" >Search</Button>
            </Form>
            {this.state.books && <SingleBook name ={this.state.books}/>}
            </>)
    }
}

export default FilterBooklist