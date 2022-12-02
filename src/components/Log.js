import {TextField, Typography, Button} from '@mui/material'
import {useNavigate} from 'react-router-dom'

 function Log(){

    class User {
        constructor(username, password,type){
            this.username = username;
            this.password = password;
            this.type = type;
        }

    }


    const client = new User("cliente",'1234',1)
    const admin = new User("admin",'admin',0)

    var tempUser =""
    var tempPass = ""

    const handleUserchange = (e) => {
        tempUser = e.target.value

    }
    const handlePasschange = (e) => {
        tempPass = e.target.value
    }

    var currentUser

    const handlesubmit = () => {
        console.log(tempUser)
        if (client.username === tempUser && client.password === tempPass){ 
            currentUser = 1
            navigate('/home/'+currentUser)
        }else 
        if (admin.username === tempUser && admin.password === tempPass){
            currentUser = 0
            navigate('/home/'+currentUser)
        } else{
            window.alert("Error: Usuario y/o contraseña incorrectos");
        }
        
    }

     const navigate = useNavigate();

    return(
        <>
        <div className="form">
            <Typography>Log In</Typography> <br/>
            <TextField label="Nombre de usuario" variant="outlined" onChange= {(e) => handleUserchange(e)} /> <br/>
            <TextField label="Contraseña" variant="outlined"  onChange= {(e) => handlePasschange(e)} />  <br/>
            <Button variant = 'contained' onClick={handlesubmit}> Ingresar </Button>    
        </div>
        </>
    )
}

export default Log;