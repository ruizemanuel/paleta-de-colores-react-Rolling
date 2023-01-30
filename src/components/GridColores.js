import React from 'react';
import { ListGroup } from 'react-bootstrap';
import ItemColor from './ItemColor';

const GridColores = (props) => {
    return (
        <ListGroup horizontal>
         {props.arregloColores.map((item, posicion) => <ItemColor key={posicion} dato={item} borrarColor={props.borrarColor}/>)}
        </ListGroup>
    );
};

export default GridColores;