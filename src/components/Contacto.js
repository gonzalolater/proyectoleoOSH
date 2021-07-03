import React from 'react'
import './Navbar/styles/Foto.css'

const Contacto = () => {
    return (
        <div>
<section id="contact" class="contact-section">
    <div class="contact-section-header">
      <h2>Trabajemos juntos...</h2>
      <p>Queres tomar un cafe ?</p>
    </div>
    <div class="contact-links">
      <a href="https://www.linkedin.com/in/leandro-ariel-aguilar-osh/" class="btn contact-details"
        ><i class="fab fa-linkedin"></i>Linkedin</a
      >
      <a href="tel:+54 9 11 3304 8172" class="btn contact-details"
        ><i class="fas fa-mobile-alt"></i> Llamame</a
      >
      <a
        href="https://www.facebook.com/aguilar.leandro.3"
        class="btn contact-details"
        ><i class="fab fa-facebook-square"></i> Facebook</a
      >
    </div>
  </section>
        </div>
    )
}

export default Contacto
