// import logo from './images/logo.png'
import { Link, NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../container/CartWidget';
const NavBar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><Link to='/'>
                        LOGO
                    </Link></Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><NavLink to="/categoria/Abarrotes">Abarrotes</NavLink></Nav.Link>
                        <Nav.Link><NavLink to="/categoria/Frutas">Frutas</NavLink></Nav.Link>
                    </Nav>
                    <CartWidget/>
                </Container>
            </Navbar>
            {/* <nav className="navBarTest">

                <div className="listadoNavbar">
                    <ul>
                        <li className="liLink"></li>
                        <li className="liLink"></li>
                    </ul>
                </div>
            </nav> */}
        </>
    )
}

export default NavBar