import React from 'react'
import './Navbar/styles/Servicios.css'

const Servicios = () => {
    return (
        <div>
            <div class="container-fluid">
  <div class="row">
    <div class="col-xs-8">
      <h2 class="text-warning text-center">Servicios</h2>
    </div>
    <div class="col-xs-4">
      <img class="img-responsive thick-orange-border" src="https://i.ibb.co/PCqkczR/seguridadtrabajo-LEO.jpg" alt="Servicios Seguridad e Higiene"/> 
      <p>Servicio de auditoria<span class="text-danger"> externo:</span></p>
        <ul>
            <li>Capacitaciones en general</li>
            <li>Carga de fuego</li>
            <li>Trabajo en altura</li>
            <li>Iluminación uniforme</li>
            <li>Gases en el ambiente</li>
            <li>Medición de puesto de trabajo, métodos REBA y RULA.</li>
        </ul>
    </div>
  </div>
  <img class="img-responsive thick-orange-border2"  src="https://i.ibb.co/fFvspyX/seguridad-e-higiene-en-la-construccion.jpg" alt="seguridad-e-higiene-en-la-construccion"></img>
</div>
    <p>Medidas de <span class="text-info">Seguridad</span></p>
</div>
        
    )
}

export default Servicios