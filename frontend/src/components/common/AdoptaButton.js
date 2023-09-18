import React from 'react';
import { Link } from 'react-router-dom';

function AdoptaButton() {
  const buttonStyle = {
    fontFamily: "Arial, Helvetica, sans-serif;",
    color: "#2e3138",
    fontSize: "14px",
    marginTop: "10px",
    borderRadius: "5%", 
    width: "150px",
    height: "35px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textDecoration: "none",
    backgroundColor: "#d5d7dd",
    border: "2px solid #d5d7dd",
    cursor: "pointer",
  };
  
  

  return (
    <div>
      {/* Otro contenido de la página */}
      <Link to="/formulario-adopcion">
        <button style={buttonStyle}>Adoptar</button>
      </Link>
    </div>
  );
}

export default AdoptaButton;
