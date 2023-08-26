import React from 'react';
import { Link } from 'react-router-dom';

function MasInfoButton(ruta, tituloBoton) {
  const buttonStyle = {
    fontFamily: "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', 'Geneva', Verdana, sans-serif",
    color: "gray",
    fontSize: "18px",
    marginTop: "10px",
    borderRadius: "10%", 
    width: "150px",
    height: "100px", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    backgroundColor: "",
    border: "none",
    cursor: "pointer",
  };

  return (
    <div>
      {/* Otro contenido de la página */}
      <Link to="/mas-informacion-sobre-nosotros">
        <button style={buttonStyle}>Más Sobre Nosotros</button>
      </Link>
    </div>
  );
}

export default MasInfoButton;
