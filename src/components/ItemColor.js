import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import '../styles/styles.css'

const ItemColor = (props) => {

    const color = {
        backgroundColor: props.dato
    }

    return (
        <ListGroup.Item >
            <div className='sizeItem mt-5 mb-5'>
                <p className='mt-3 ms-3 mb-4'>{props.dato}</p>
                <div className='text-center'>
                    <div className='boxItem centrar' style={color}></div>
                    </div>
                        <div className='d-flex justify-content-between mb-3 me-3 mt-3'>
                            <div></div>
                            <Button className='btn btn-danger' 
                            onClick={() => props.borrarColor(props.dato)}>
                                Borrar
                            </Button>
                        </div>
                
            </div>
        </ListGroup.Item>
    );
};

export default ItemColor;