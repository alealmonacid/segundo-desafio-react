import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
const Home = (props) => {

    return (
        <Container fluid="lg">
            <div className="saluditop">
                <h2>Hola, {props.name} Bienvenido!</h2>
                <h3>Puedes entrar iniciando sesión aquí</h3>
                <Button variant="primary">Primary</Button>{'Hola'}
            </div>
        </Container>
    )
}

export default Home