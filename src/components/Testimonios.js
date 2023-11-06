import React from 'react';
import './Testimonios.css';

const testimoniosData = [
    {
      nombre: 'Luis Franco',
      cargo: 'Compañero de carrera',
      reseña: 'Buen compañero de trabajo que no te deja tirado.',
    },

    {
        nombre: 'David Carrillo',
        cargo: 'Compañero de carrera',
        reseña: 'Compañero que se esfuerza aunque no entienda.',
      },

      {
        nombre: 'Oliver Tzunun',
        cargo: 'Compañero de carrera',
        reseña: 'Buen compañero con el cual se puede trabajar.',
      },
    
  ];
 

function Testimonios() {
  return (
    <div className="testimonios-section">
      {testimoniosData.map((testimonio, index) => (
        <div key={index} className="testimonio">
          <h3>{testimonio.nombre}</h3>
          <p>{testimonio.cargo}</p>
          <p>{testimonio.reseña}</p>
        </div>
      ))}
    </div>
  );
}

export default Testimonios;
