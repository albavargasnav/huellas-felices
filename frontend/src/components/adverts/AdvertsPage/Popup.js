import React from 'react';
import { Link } from 'react-router-dom';

function Popup(props) {

  return (
    <div className="popup">
      <div className="popup-content">
        <p>Para poder ver la información necesitas iniciar sesión</p>
        <Link to="/login">
        <button>Iniciar Sesión</button>
        </Link>
        <button onClick={props.closePopup}>Cerrar</button>
        </div>
      </div>
  )
}

export default Popup;