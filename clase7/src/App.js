import { Fragment, useState } from 'react';
import {Button, Row, Col, Container, Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Ficha from './components/Ficha'; 
import Cabecera from './components/Cabecera';
import Contador from './components/Contador';

function App() {
  //datos para Ficha
  const [numero, setNumero] = useState({});
  const [nombre, setNombre] = useState({});
  //número para consultar a la api
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
  
  // Asigna a valor un número aleatorio dentro del rango
  const cargarAleatorio = ()  => {
    actualizarError(false);//si existe el error de la busqueda, lo quita
    valor = Math.floor((Math.random() * (151)))+1;
    consultarAPI()
  }

  // Datos para formulario
  const [numBus, setNumbus] = useState({
    valor:''
  });
  const [error, actualizarError] = useState (false);

  // Asigna a valor el dato que subió el usuario
  const handleChange = e => {
    setNumbus({
        ...numBus,
        [e.target.name] : e.target.value
    })
  }

  const cargarBusqueda = e =>{
    e.preventDefault();
    valor = numBus.valor==='' ? 0 : numBus.valor;//si el dato es vacío arroja error en patalla
    if (valor > 151 || valor===0){
      actualizarError(true);
      return;
    }
    actualizarError(false);
    consultarAPI()
    setNumbus({
      valor:''
    })
  }

  // Cuando intenté poner el formulario de busqueda en un componente con
  // sus funciones (numBus, error, cargarBusqueda y handleChange),  
  // la variable valor tenía un delay para recibir los datos, al punto en que 
  // necesitaba presionar dos veces el botón para que la interacción ocurra y
  // la ficha aparezca en pantalla. 
  // Me gustaría alguna sugerencia para poder separarlo y emprolijar el código.



  // Datos para contador
  // No use localstorage simplemente por no encontrar mucho sentido en la app
  // recordar los vistos. Esta estructura solo se usa para contar los pokemons
  // que salieron en el momento.
  const [registrados, setRegistrados] = useState([]);

  return (
    <Fragment>
      <Cabecera/>
      <div className="App-body">
        <Container>
          <Row>
            <Col className="Boton-Buscar">
              <form onSubmit={cargarBusqueda}>
                <label>Buscar por número:<input 
                  type="text"
                  name="valor"
                  value={numBus.valor}
                  placeholder="Número del pokemon"
                  className="form-control"
                  onChange={handleChange}
                /></label>
                <Button variant="success"
                  type="submit">
                  Buscar
                </Button>
              </form>
              <h5>{ error ? <Alert variant='danger' className="Alerta"> Ingresa un número del 1 al 151 </Alert> : null }</h5>
            </Col>
            <Col className="Boton-Ale"> 
              <Button 
                variant="success"
                onClick={cargarAleatorio}
              >Ver uno aleatorio
              </Button>
            </Col>
          </Row>
        </Container>
        <Row>
          <Ficha
            numero = {numero}
            nombre = {nombre}
          />
        </Row>
        <Row>
          <Contador
            numero = {numero}
            registrados = {registrados}
            setRegistrados = {setRegistrados}
          />
        </Row>
      </div>
    </Fragment>
  );
}

export default App;
