import React from 'react';
import { Link } from 'react-router-dom';

function MasInfoButton() {
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
      <Link to="/mas-informacion">
        <button style={buttonStyle}>Más información</button>
      </Link>
    </div>
  );
}

export default MasInfoButton;
