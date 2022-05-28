// import logo from './images/logo.png'

const NavBar = () => {
    return (
        <>
            <nav className="navBarTest">
                <div className="imgLogo"></div>
                <div className="listadoNavbar"> 
                    <ul>
                        <li className="liLink"><a href="/">Inicio</a></li>
                        <li className="liLink"><a href="/">Quienes Somos</a></li>
                        <li className="liLink"><a href="/">Contacto</a></li>
                        <li className="liLink"><a href="/">Categorias</a></li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default NavBar