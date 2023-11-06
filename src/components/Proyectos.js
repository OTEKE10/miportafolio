import React, { useState } from 'react';
import './Proyectos.css';

function Proyectos() {
  const [mostrarImagen1, setMostrarImagen1] = useState(false);
  const [mostrarImagen2, setMostrarImagen2] = useState(false);

  const mostrarImagenClick1 = () => {
    setMostrarImagen1(!mostrarImagen1); // Cambiar el estado actual al opuesto
  };

  const mostrarImagenClick2 = () => {
    setMostrarImagen2(!mostrarImagen2); // Cambiar el estado actual al opuesto
  };

  return (
    <div className="proyectos">
      <h2>Proyectos</h2>
      <div className="proyecto">
        <h3>Proyecto 1: Aplicación con stickers NFC</h3>
        <p>
          Este proyecto fue mi ticket hacia mi graduación en el colegio ya que este mismo trataba de volver el carnet escolar en una tarjeta de débito utilizando stickers NFT donde volvían el carnet en una tarjeta que almacenaría dinero tanto por los estudiantes como por sus padres para que fuera canjeado en la tienda o en la librería escolar.
          <a href="#" onClick={mostrarImagenClick1}>
            {mostrarImagen1 ? 'Ocultar' : 'Mostrar'} imagen
          </a>.
        </p>
        {mostrarImagen1 && (
          <img src="/proyecto1.jpg" alt="Descripción de la imagen 1" />
        )}
      </div>
      <div className="proyecto">
        <h3>Proyecto 2: Aplicación de seguimiento de tareas</h3>
        <p>
          Este proyecto puso a prueba mis habilidades como diseñador ya que me permitió experimentar diferentes formas de diseño y con ella pude realizar mi primera publicación de Instagram funcional. Puedes verla{' '}
          <a href="#" onClick={mostrarImagenClick2}>
            {mostrarImagen2 ? 'Ocultar' : 'Mostrar'} imagen
          </a>.
        </p>
        {mostrarImagen2 && (
          <img src="/proyecto2.png" alt="Descripción de la imagen 2" />
        )}
      </div>
      <div className="proyecto">
        <h3>Proyecto 3: Blog personal para cuarto año en la U</h3>
        <p>
            Este es un blog personal desarrollado con React. Lo estás viendo actualmente.
        </p>
      </div>
    </div>
  );
}

export default Proyectos;
