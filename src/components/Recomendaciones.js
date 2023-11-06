// Recomendaciones.js
import React from 'react';
import './Recomendaciones.css';
const recomendacionesData = [
  {
    
        nombre: 'Mi Abuela RosaMaria',
        cargo: 'La mejor abuela del multiverso',
        reseña:
          '¡No puedo agradecer lo suficiente a mi nieto! Mi antigua licuadora estaba en mal estado y ya pensaba que tendría que comprar una nueva. Pero entonces llegó Otto y, como por arte de magia, ¡la licuadora volvió a la vida! Ahora puedo preparar batidos. Es un genio de la reparación y un verdadero salvador en la cocina. ¡Gracias, mi amor!',
      } ,
  {
    nombre: 'Diego Perez',
    cargo: 'Mi amigo Perez',
    reseña:
      'Trabajar con Otto en el proyecto del temario fue una experiencia increíble. Su dedicación y habilidades fueron impresionantes. Siempre estuvo dispuesto a colaborar, aportando ideas creativas y soluciones efectivas. Juntos logramos un trabajo excepcional y obtuvimos excelentes resultados. ¡Espero trabajar nuevamente con Otto en futuros proyectos!',
  },

  {
    nombre: 'Amanda Ventura',
  cargo: 'La Jefecita',
  reseña:
    '¡No puedo agradecer lo suficiente a mi hijo! Recientemente, tuve un problema con mi programa de SAT, y él vino al rescate. Con su conocimiento técnico y paciencia, logró solucionar todos los problemas que tenía. Estoy muy agradecida por su ayuda y profesionalismo. Gracias a él, mi programa de SAT funciona mejor que nunca. Lo recomiendo encarecidamente para cualquier problema técnico. ¡Es un genio!',
},

  {
    nombre: 'Nicolle Ventura',
  cargo: 'Mi hermana',
  reseña:
    '¡Estoy asombrada por el increíble trabajo que mi hermano hizo para ayudarme a crear mi catálogo en Google Drive! Su creatividad y conocimiento técnico hicieron que mi catálogo se destacara. Me guió a través de todo el proceso, desde el diseño hasta la organización de los documentos. Gracias a su ayuda, mi negocio ahora tiene un catálogo profesional que ha impresionado a mis clientes. Si buscas a alguien que te ayude con proyectos técnicos, Otto es la persona perfecta para el trabajo. ¡Gracias, hermanito!',
},
  // Agrega más recomendaciones según sea necesario
];

function Recomendaciones() {
  return (
    <div className="recomendaciones">
      <h2>Recomendaciones</h2>
      {recomendacionesData.map((recomendacion, index) => (
        <div key={index} className="recomendacion">
          <h3>{recomendacion.nombre}</h3>
          <p>{recomendacion.cargo}</p>
          <p>{recomendacion.reseña}</p>
        </div>
      ))}
    </div>
  );
}

export default Recomendaciones;