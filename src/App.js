import React, {Fragment, useState, useEffect} from 'react';
import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {
  //Citas en local Storage
  /*let citasIniciales = JSON.parse(localStorage.getItem('citas');
  if(!citasIniciales) {
    citasIniciales = [];
  }*/

  // Arreglo de citas
  const [citas, setCitas] = useState([]);

  //useEffect para realizar ciertas operaciones cuando el state cambia
  useEffect( () => {
      /*let citasIniciales = JSON.parse(localStorage.getItem('citas'));
    if(citasIniciales) {
           localStorage.setItem('citas', JSON.stringify(citas))
         } else {
           localStorage.setItem('citas', JSON.stringify([]));
         }*/
         console.log("Documento listo o paso algo");
         
     }, [citas] );// se pone el arreglo para que no se cicle y se ejecute una sola vez

  //Funcion que tome las citas actualis y agrege la nueva
  const crearCita = cita => {
    setCitas([
      cita
    ])
  }

  //Funcion que elimina un cita por su id
  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    setCitas(nuevasCitas);
  }

  //Mnesaje condicional
  const titulo = citas.length === 0 ? 'Registrate para reclamar tu bono' : 'Redime tu bono en nuestras tiendas'

  return (
  <Fragment>
      <h1>Tu primer domicilio</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}
              />
          </div>
          <div className="one-half column">
             <h2>{titulo}</h2>
             {citas.map(cita => (
               <Cita
                key={cita.id}
                cita={cita}
                eliminarCita={eliminarCita}
                 />
             ))}
          </div>
        </div>
      </div>
  </Fragment>
  );
}

export default App;
