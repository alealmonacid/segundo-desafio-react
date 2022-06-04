import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './container/ItemListContainer'
import Container from 'react-bootstrap/Container'
function App() {
  return (
    <>
    <NavBar/>
    <Container fluid="lg">
      <ItemListContainer name="Alejandro Patricio"/>
    </Container>
    </>
  );
}

export default App;
