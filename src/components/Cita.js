import React, {Fragment} from 'react'
import PropTypes from 'prop-types'

const Cita = ({cita, eliminarCita}) => {

  const { cedula, nombre, fecha, ciudad, iMejorar } = cita;

  return (
    <Fragment>
      <div className="cita">
        <p>Cedula: <span>{cedula}</span></p>
        <p>Nombre: <span>{nombre}</span></p>
        <p>Fecha: <span>{fecha}</span></p>
        <p>Ciudad: <span>{ciudad}</span></p>
        <p>Ideas: <span>{iMejorar}</span></p>
        <button
           className="button eliminar u-full-width"
  >Tu codigo es: {Math.floor(Math.random() * (9999999 - 1000000)) + 1000000}</button>
      </div>
    </Fragment>
  )
}

Cita.propTypes = {
  cita: PropTypes.object.isRequired,
  eliminarCita: PropTypes.func.isRequired
}

export default Cita
