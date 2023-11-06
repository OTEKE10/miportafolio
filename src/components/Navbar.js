// Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/sobre-mi">Sobre Mí</Link></li>
        <li><Link to="/proyectos">Proyectos</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
        <li><Link to="/recomendaciones">Recomendaciones</Link></li>
        <li><Link to="/redessociales">RedesSociales</Link></li>
        <li><Link to="/testimonios">Testimonios</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
