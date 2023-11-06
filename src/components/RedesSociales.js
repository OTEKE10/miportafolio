import React from 'react';
import './RedesSociales.css';

import facebookIcon from './Iconos/facebook-icon.svg';
import instagramIcon from './Iconos/instagram-icon.svg'; 

const redesSocialesData = [
  {
    nombre: 'Facebook',
    icono: facebookIcon,
    url: 'https://www.facebook.com/profile.php?id=100008368037804&mibextid=ZbWKwL',
  },
  {
    nombre: 'Instagram', 
    icono: instagramIcon, 
    url: 'https://instagram.com/o.ventura26?igshid=MzMyNGUyNmU2YQ==', 
  },
];

function RedesSociales() {
  return (
    <div className="redes-sociales">
      {redesSocialesData.map((redSocial, index) => (
        <a key={index} href={redSocial.url} target="_blank" rel="noopener noreferrer">
          <img src={redSocial.icono} alt={redSocial.nombre} />
        </a>
      ))}
    </div>
  );
}

export default RedesSociales;
