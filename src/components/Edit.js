import {TextField, Typography, Button} from '@mui/material'

function Edit () {
    return(
        <>
            <Typography>Editar Evento</Typography> <br/>
            <TextField label="Nombre" variant="outlined" /> <br/>
            <TextField label="Fecha" variant="outlined" />  <br/>
            <TextField label="Cupos" variant="outlined" />  <br/>
            <TextField label="Lugar" variant="outlined" />  <br/>
            <TextField label="Precio" variant="outlined" /> <br/>
            <TextField label="Descripcion" variant="outlined" />   <br/>
            <Button variant = 'contained'> Realizar cambios </Button>              
        </>
    )
}

export default Edit;