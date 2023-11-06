import React from 'react';
import Recomendaciones from './Recomendaciones';
import './SobreMi.css';

function SobreMi() {
  return (
    <div className="sobre-mi">
      <h2>Sobre Mí</h2>
      <p>Soy un estudiante pronto a graduarse de ingeniero en sistemas capaz de realizar diferentes proyectos en diferentes ambitos tanto en paginas web como en programas mas complejos.</p>
      <p>Mis habilidades incluyen HTML, CSS, JavaScript, React, Node.js, C#, GitHub, Diseño de paginas web y otros.</p>
      <p>Mis estudios y logros academicos son el poder terminar mis estudios en bachillerato en ciencas y letras ademas de poder tener la experiencia de ir a diferentes reuniones y exposiciones de tecnologia donde aprendi muchos aspectos de la carrera y en que me gustaria especializarme.</p>
      <Recomendaciones /> {/* Agrega la sección de recomendaciones aquí */}
    </div>
  );
}

export default SobreMi;