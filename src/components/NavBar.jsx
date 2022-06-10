// import logo from './images/logo.png'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navBarTest">
                <Link to='/'>
                    LOGO
                </Link>
                <div className="listadoNavbar"> 
                    <ul>
                        <li className="liLink"><NavLink to="/categoria/Abarrotes">Abarrotes</NavLink></li>
                        <li className="liLink"><NavLink to="/categoria/Frutas">Frutas</NavLink></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar