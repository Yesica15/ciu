import {Fragment, React} from 'react';
import {Container, Image, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ficha.css';

const Ficha = ({ numero, nombre}) => {
    
    const num = numero.game_index === undefined ? '--' : numero.game_index
    const nom = nombre.name === undefined ? '--' : nombre.name
    const imagen = numero.game_index === undefined ? 'https://pbs.twimg.com/profile_images/1143663837389807616/RHGpo2F-_400x400.png'
    :'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/'+ numero.game_index+'.png';

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
                        <Image src={imagen} thumbnail className="imagen"/>
                    </Col>
                </Row>
            </Container>       
        </Fragment>
     );
}
 
export default Ficha;