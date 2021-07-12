import {Fragment, React, useEffect} from 'react';
import {Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './contador.css';

const Contador = ({ numero, registrados, setRegistrados}) => {
    const num = numero.game_index === undefined ? 0 : numero.game_index
    const faltantes = 151 - registrados.length //para ver el segundo mensaje, desender 151
    useEffect(() => {
        const registrarNumero = () =>{
            if (!registrados.includes(num) & num!==0){
              setRegistrados([...registrados, num])
            }
        }
        registrarNumero();
    })  
    return ( 
        <Fragment>
            <Container className="NotaContador">
                { faltantes!==0 ? <h5>Te faltan {faltantes} pokemons por conocer</h5> : <h5>Ya los conoces a todos ¡Felicidades!</h5> }
            </Container>      
        </Fragment>
     );
}
 
export default Contador;