import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import './Home2.css'
import {useParams } from 'react-router-dom';

function Home2 () {
    
    var [eventos, seteventos] = useState([])

    const navigate = useNavigate();
    
    const { id } = useParams();

    useEffect(() => {
        const eventos = localStorage.getItem('eventos')
        seteventos (JSON.parse(eventos))
    }, [])

    const addbtn = () =>{
        navigate('/add')
    }
    
    
    var deletS = ''
    var compraS = ''
    var editS =''

    console.log(id)
    if (id==1) {
        editS = 'None'
        deletS = 'None'
        compraS = 'block'
    }else{
        editS = 'inline-block'
        deletS = 'inline-block'
        compraS = 'None'
    }
    
    var deleteEvent = (event) => {
        console.log(event)
        eventos = eventos.filter((evento) => evento.uudi !== event.uudi);
        console.log(eventos)
        localStorage["eventos"] = JSON.stringify(eventos);
        window.alert("Evento borrado exitosamente");
        seteventos(eventos)
        navigate('/home/0')
      };

    return(
        <> 
        <div className="row">
            <div class = "ad">
                <button class= "add" type="Añadir evento" onClick={addbtn} style={{"display": deletS}} >Agregar Evento</button>
            </div>
            <div className="col">
            {
                eventos && eventos.length > 0 ?
                eventos.map(evento => {
                    return (
                        <>
                                <div className="event">
                                    <img  className = "image" src="https://m.media-amazon.com/images/M/MV5BZjdkYjg1NzMtOTY2YS00ZWI1LWEwZWYtOTU1YTM2ODA2ZWY5XkEyXkFqcGdeQXVyMTM1MjAxMDc3._V1_.jpg"/>
                                    <h3 className="nombre">{ evento.nombre }</h3>
                                    <div className = 'info'>
                                        <div className= 'fecha'> { evento.fecha }</div>
                                        <div className= 'lugar-boton'>
                                            <div className="lugar"> { evento.lugar} </div>
                                            <div className = 'compra' id= 'compra' style={{"display": compraS}}>Comprar</div>
                                            <div className = 'editar'  id= 'edit' onClick={() => navigate(`/edit/${evento.uudi}`)} style={{"display": editS}} >Editar</div>
                                            <div className = 'borrar'  id= 'delet' style={{"display": deletS}} onClick={() => deleteEvent(evento)} >Borrar</div>
                                        </div>
                                     </div>
                                </div>                    
                        </>
                    )
                })
                :
                'No data available'
                
            }
             </div>
         </div>
        </>
    )
}

export default Home2;