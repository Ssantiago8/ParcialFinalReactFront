import {TextField, Typography, Button} from '@mui/material'
import { useEffect, useState } from "react";
import {useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'

function Edit () {

    var { id } = useParams();

    let eventos = window.localStorage.getItem('eventos')
    eventos = JSON.parse(eventos)
    eventos = eventos.filter(evento => evento.uudi == id);

    var getNombre = () =>{
        return eventos[0].nombre
    }
    var getFecha = () =>{
        return eventos[0].fecha
    }
    var getCupos = () =>{
        return eventos[0].cupos
    }
    var getLugar = () =>{
        return eventos[0].lugar
    }
    var getPrecio = () =>{
        return eventos[0].precio
    }
    var getDescripcion = () =>{
        return eventos[0].descripcion
    }

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
        
        var eventos = localStorage.getItem('eventos') && localStorage.getItem('eventos').length > 0 ? JSON.parse(localStorage.getItem('eventos')) : []
        eventos = eventos.filter((evento) => evento.uudi !== id);
        var newEvent = {nombre, fecha, cupos, lugar, precio, descripcion, id}
        eventos.push(newEvent);
        localStorage["eventos"] = JSON.stringify(eventos);

        navigate('/home/0')

        
    }
    const navigate = useNavigate();


    return(
        <>
                    <Typography>Editar Evento</Typography> <br/>
                    <TextField label="Nombre" variant="outlined" value = {getNombre()} onChange= {(e) => handlenombrechange(e)} /> <br/>
                    <TextField label="Fecha" variant="outlined" value = {getFecha()} onChange= {(e) => handlefechachange(e)} />  <br/>
                    <TextField label="Cupos" variant="outlined"  value = {getCupos()}  onChange= {(e) => handlecuposchange(e)}/>  <br/>
                    <TextField label="Lugar" variant="outlined" value = {getLugar()}  onChange= {(e) => handlelugarchange(e)} />  <br/>
                    <TextField label="Precio" variant="outlined" value = {getPrecio()} onChange= {(e) => handlepreciochange(e)} /> <br/>
                    <TextField label="Descripcion" variant="outlined" value = {getDescripcion()} onChange= {(e) => handledescripcionchange(e)} />   <br/>
                    <Button variant = 'contained' onClick={handlesubmit} > Realizar cambios </Button>
                   
            
             
        </>
    )
}

export default Edit;