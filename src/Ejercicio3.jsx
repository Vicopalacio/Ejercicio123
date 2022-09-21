import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const Ejercicio3 = () => {
    const [texto, setTexto] = useState("");

    const mostrarTexto = ()=>{
        setTexto("Changed State")
    }

    return (
        <div>
            <h4>Hola mundo {texto}</h4>
            <Button onClick={mostrarTexto}>Click aquí</Button>
        </div>
    );
};

export default Ejercicio3;
