import { useEffect, useState } from "react";


function Home2 () {
    
    const [eventos, setevetos] = useState([])


    useEffect(() => {
        const eventos = localStorage.getItem('eventos')
        setevetos (JSON.parse(eventos))
    }, [])

    return(
        <>  
            Home2
            {
                eventos && eventos.length > 0 ?
                eventos.map(evento => {
                    return (
                        <>
                        Nombre - {
                            evento.nombre
                        }

                        Fecha {
                            evento.fecha
                        }

                        Cupos {
                            evento.cupos
                        }   

                        Lugar {
                            evento.lugar
                        }

                        Precio {
                            evento.precio
                        }

                        Descripcion{
                            evento.descripcion
                        }                        
                        </>
                    )
                })
                :
                'No data available'
            }
        </>
    )
}

export default Home2;