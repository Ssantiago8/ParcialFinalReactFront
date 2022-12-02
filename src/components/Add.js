import {TextField, Typography, Button} from '@mui/material'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'


function Add () {

    const [nombre, setnombre] = useState('')
    const [fecha, setfecha] = useState('')
    const [cupos, setcupos] = useState('')
    const [lugar, setlugar] = useState('')
    const [precio, setprecio] = useState('')
    const [descripcion, setdescripcion] = useState('')

    
    const handlenombrechange = (e) => {
       
        setnombre(e.target.value)
    }
    const handlefechachange = (e) => {
       
        setfecha(e.target.value)
    }
    const handlecuposchange = (e) => {
       
        setcupos(e.target.value)
    }
    const handlelugarchange = (e) => {
       
        setlugar(e.target.value)
    }
    const handlepreciochange = (e) => {
       
        setprecio(e.target.value)
    }
    const handledescripcionchange = (e) => {
       
        setdescripcion(e.target.value)
    }
    
    const handlesubmit = () => {
        
        const eventos = localStorage.getItem('eventos') && localStorage.getItem('eventos').length > 0 ? JSON.parse(localStorage.getItem('eventos')) : []
        
        let uudi = generateUUID();

        localStorage.setItem('eventos', JSON.stringify([...eventos, {nombre, fecha, cupos, lugar, precio, descripcion, uudi}]));

        navigate('/home/0')

        
    }
    const navigate = useNavigate();

    return(
        <>
            <Typography>Crear Evento</Typography> <br/>
            <TextField value={nombre} onChange= {(e) => handlenombrechange(e)} label="Nombre" variant="outlined" /> <br/>
            <TextField value={fecha} label="Fecha" onChange= {(e) => handlefechachange(e)} variant="outlined" />  <br/>
            <TextField value={cupos} label="Cupos" onChange= {(e) => handlecuposchange(e)} variant="outlined" />  <br/>
            <TextField value={lugar} label="Lugar" onChange= {(e) => handlelugarchange(e)} variant="outlined" />  <br/>
            <TextField value={precio} label="Precio" onChange= {(e) => handlepreciochange(e)} variant="outlined" /> <br/>
            <TextField value={descripcion} label="Descripcion" onChange= {(e) => handledescripcionchange(e)} variant="outlined" />     <br/>
            <Button variant = 'contained' onClick={handlesubmit}> Crear </Button>        
        </>
    )
}

function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now()*1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16;//random number between 0 and 16
        if(d > 0){//Use timestamp until depleted
            r = (d + r)%16 | 0;
            d = Math.floor(d/16);
        } else {//Use microseconds since page-load if supported
            r = (d2 + r)%16 | 0;
            d2 = Math.floor(d2/16);
        }
        return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
}


export default Add;