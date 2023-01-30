import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import '../styles/styles.css'
import GridColores from './GridColores';

const FormColores = () => {

    let coloresLocalStorage = JSON.parse(localStorage.getItem('listaColores')) || [];
    const [colores, setColores] = useState(coloresLocalStorage);
    const [colorIndividual, setColorIndividual] = useState('');

    useEffect(() => {
        localStorage.setItem('listaColores', JSON.stringify(colores));
    }, [colores]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setColores([...colores, colorIndividual]);
        setColorIndividual('');
    }

    const borrarColor = (nombre)=>{
        let arrayFiltrado = colores.filter(color => color !== nombre);
        setColores(arrayFiltrado);
    };

    return (
        <div>
            <div className='size mt-5 mb-5'>
                <p className='mt-3 ms-3 mb-4'>Administrar colores</p>
                <div className='d-flex justify-content-around'>
                    <div className='box'></div>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-5">
                            <Form.Control type="text"
                                placeholder="Ingrese un color ej Blue"
                                onChange={(e) => setColorIndividual(e.target.value)}
                                value = {colorIndividual}
                            />
                        </Form.Group>

                        <div className='d-flex justify-content-between mb-3'>
                            <div></div>
                            <Button variant="primary" type="submit">
                                Guardar
                            </Button>
                        </div>

                    </Form>
                </div>

            </div>
            <section className="container">
                <GridColores arregloColores={colores} borrarColor={borrarColor}></GridColores>
            </section>
        </div>

    );
};

export default FormColores;