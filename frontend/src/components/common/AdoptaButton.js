import React from 'react';
import { Link } from 'react-router-dom';
import "./AdoptaButton.css";

function AdoptaButton() {
  return (
    <div className='adoptar-container'>
      {/* Otro contenido de la página */}
      <Link to="/formulario-adopcion">
        <button className='boton-adoptar'>¡Adóptame!</button>
      </Link>
    </div>
  );
}

export default AdoptaButton;
