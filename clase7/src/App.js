import { Fragment, useState } from 'react';
import {Button, Row, Col, Container, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Ficha from './components/Ficha'; 

function App() {

  const [numero, setNumero] = useState({});
  const [nombre, setNombre] = useState({});
  var valor;
  
  // Consultar la API y traerla 
  const consultarAPI = async () => {
    try{
      const fr = 'https://pokeapi.co/api/v2/pokemon/'+valor
      const api = await fetch(fr);
      const pokemon = await api.json();
      setNumero(pokemon.game_indices[3]);
      setNombre(pokemon.forms[0])
    } catch (error) {
      console.log(error);
    }
  };
  
  // asigna a valor un número aleatorio dentro del rango
  const cargarAleatorio = ()  => {
    valor = Math.floor((Math.random() * (152)))+1;
    consultarAPI()
  }


  // Cuando intenté poner el formulario de busqueda en un componente, 
  // la variable valor tenía un delay para recibir, al punto en que 
  // necesitaba presionar dos veces el botón para
  // que el dato aparezca en pantalla. 
  // Me gustaría alguna sugerencia para poder separarlo y emprolijar el código.
  const [numBus, setNumbus] = useState({
    valor:''
  });
  const [error, actualizarError] = useState (false);

  // asigna a valor el valor que subió el usuario
  const handleChange = e => {
    setNumbus({
        ...numBus,
        [e.target.name] : e.target.value
    })
  }

  const cargarBusqueda = e =>{
    e.preventDefault();
    valor = numBus.valor;
    if (valor > 151 || valor.trim()==='0'){
      actualizarError(true);
      return;
    }
    actualizarError(false);
    consultarAPI()
    setNumbus({
      numBus: ''
    })
  }

  return (
    <Fragment>
      <header className="App-header">
        <h1>Conoce a los pokemons de la primera generación</h1>
      </header>
      <div className="App-body">
        <Container>
          <Row>
            <Col className="Boton-Buscar">
              <form onSubmit={cargarBusqueda}>
                <label>Buscar por número:<input 
                  type="text"
                  name="valor"
                  value={valor}
                  placeholder="Número del pokemon"
                  className="form-control"
                  onChange={handleChange}
                /></label>
                <Button variant="success"
                  type="submit">
                  Buscar
                </Button>
            </form>
          </Col>
            <Col className="Boton-Ale"> 
              <Button 
                variant="success"
                onClick={cargarAleatorio}
              >Ver uno aleatorio
              </Button>
            </Col>
          </Row>
          { error ? <Alert variant='danger'> La primera generación va del 1 al 151 </Alert> : null }
        </Container>
        <Row>
          <Ficha
            numero = {numero}
            nombre = {nombre}
          />
        </Row>
        
      </div>
    </Fragment>
  );
}

export default App;
