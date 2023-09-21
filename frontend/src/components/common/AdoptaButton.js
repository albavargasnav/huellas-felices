import React from 'react';
import "./AdoptaButton.css";
import {useNavigate } from 'react-router-dom';
import { createRequest } from "../../components/adverts/service"

function AdoptaButton({creador, mascota, idNavegante, descMascota, mostrar, ...props}) {
  const navigate = useNavigate();
  const goToController = () => {
    createRequest({creador: creador, mascota: mascota, idNavegante: idNavegante, descMascota: descMascota})
      .then(() => navigate("/adverts"))
      .catch((error) => {
        console.error(error);
      });
    };
  if (mostrar) {
    return (
      <div className='adoptar-container'>
        <button onClick={goToController} className='boton-adoptar'>¡Adóptame!</button>
      </div>
    );
  }
}

export default AdoptaButton;
