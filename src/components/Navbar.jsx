import { Nav,Navbar} from 'react-bootstrap'
import { withRouter } from 'react-router'
import {Link} from 'react-router-dom'

const NavBar =()=> {

    return(
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Link to="/">
            <Navbar.Brand>BookStore.</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Link to="/">
                    <div className="nav-link">Home</div>
                </Link>
                <Link to="/menu">
                    <div className="nav-link">Discover Books</div>
                </Link>
                <Link to="/register">
                    <div className= 'nav-link'>Registration</div>
                </Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}

export default withRouter(NavBar) 