import React, {Fragment, useState} from 'react'
import uuid from 'uuid/v4'
import PropTypes from 'prop-types'

const Formulario = ({crearCita}) => {
  //Crear State de Citas
  const [cita, setCita] = useState({
    cedula: '',
    nombre: '',
    fecha: '',
    ciudad: '',
    iMejorar: ''
  });

  const [ error, setError ] = useState(false);

  //funcion que se ejecuta cada que el usuario escribe en un imput
  const actualizarState = e => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value
    })
  }
  // Extraer los valores destructuring
  const { cedula, nombre, fecha, ciudad, iMejorar } = cita;

  //Cuando se envia el formulario
 const submitCita = e => {
  e.preventDefault();
  //Validar
   if (cedula.trim() === '' ||
       nombre.trim() === '' ||
       fecha.trim() === '' ||
       ciudad.trim() === '' ||
       iMejorar.trim() === '' ) {
    setError(true);
    return;
   }

  //Elimina mensaje previo
  setError(false);
  //Asignar un ID
  cita.id = uuid();
  //Crear la cita
  crearCita(cita)
  //Reiniciar el form
  setCita({
    cedula: '',
    nombre: '',
    fecha: '',
    ciudad: '',
    iMejorar: ''
  })
}
  return (
    <Fragment>
      {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
      <form
        onSubmit={submitCita}
        >
        <label>Cedula</label>
        <input
          type="text"
          name="cedula"
          className= "u-full-width"
          placeholder="Numero de Cedula"
          onChange={actualizarState}
          value={cedula}
          />
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          className="u-full-width"
          placeholder="Nombre Completo"
          onChange={actualizarState}
          value={nombre}
          />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={actualizarState}
          value={fecha}
          />
        <label>Ciudad</label>
        <input
          type="text"
          name="ciudad"
          placeholder="Ciudad"
          className="u-full-width"
          onChange={actualizarState}
          value={ciudad}
          />
        <label>Ideas para Mejorar</label>
          <textarea
              className="u-full-width"
              name="iMejorar"
              placeholder="Escribe tus ideas para mejorar nuestro negocio"
              onChange={actualizarState}
              value={iMejorar}
            ></textarea>

          <button
             type="submit"
             className="u-full-width button-primary color"
            >Pedir bono</button>
      </form>
    </Fragment>
  )
}

Formulario.propTypes = {
  crearCita: PropTypes.func.isRequired
}

export default Formulario
