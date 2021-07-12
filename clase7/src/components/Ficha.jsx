import {Fragment, React} from 'react';
import {Container, Image, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ficha.css';

const Ficha = ({ numero, nombre}) => {
    
    const num = numero.game_index === undefined ? '--' : numero.game_index
    const nom = nombre.name === undefined ? '--' : nombre.name
    const imagen = numero.game_index === undefined ? 'https://the-artifice.com/wp-content/uploads/2015/09/Pokemon-logo.jpg'
    :'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+ numero.game_index+'.png';
    //Si cualquiera de las imagenes no es visible es propable que dejara de estar en linea, principalmente la que usé de portada

    return ( 
        <Fragment>
            <Container>
                <h1>Ficha</h1>
                <Row className="Posicion-Ficha">
                    <Col className="ColorDatos">
                        <h3 className="Margen">Número en pokedex: {num}</h3>
                        <h3 className="NombrePok">Nombre: {nom}</h3>
                    </Col>
                    <Col className="ColorImagen">
                        <Image src={imagen} thumbnail className="Imagen"/>
                    </Col>
                </Row>
            </Container>       
        </Fragment>
     );
}
 
export default Ficha;