import React from 'react';
import './Inicio.css';

function Inicio() {
  const githubRepoUrl = 'https://github.com/OTEKE10/miportafolio.git;' // Reemplaza con tu URL de repositorio
  const nombre = 'Otto';
  const profesion = 'Desarrollador de Software';
  const experiencia = 'con experiencia en proyectos de desarrollo web y aplicaciones móviles.';
  const intereses = 'Me apasiona la programación y la creación de soluciones tecnológicas. Mis intereses incluyen el desarrollo frontend, backend, diseño web y mucho más.';
  const contacto = '¡No dudes en contactarme si deseas trabajar juntos en un proyecto emocionante!';

  return (
    <div>
      <h1>¡Bienvenido a mi portafolio!</h1>
      <p>Hola, me llamo {nombre} y soy {profesion} {experiencia}</p>
      <p>{intereses}</p>
      <p>{contacto}</p>
      <div className="image-container">
        <a href={githubRepoUrl} target="_blank" rel="noopener noreferrer" className="github-link">
          <img src="/github.png" alt="GitHub" width="100" height="100" />
        </a>
        <img src="/yo.jpg" alt="Mi foto" width="300" height="400" />
      </div>
    </div>
  );
}

export default Inicio;


