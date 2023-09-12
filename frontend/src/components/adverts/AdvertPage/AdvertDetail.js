import React from 'react';
import T from 'prop-types';

import { ConfirmationButton } from '../../common';
import placeholder from '../../../assets/images/placeholder.png';
import { advert } from '../propTypes';
const fotoUrl = `${process.env.REACT_APP_API_BASE_URL}`;

function AdvertDetail({ nombre, disponible, edad, raza, size, foto, sexo, perro, descripcion, onDelete, isLoading }) {
  const fecha = new Date(edad);
  return (
    <div className="contenedor-detalle">
      <div className='contenedor-foto'>
        <h1 className='enunciado'>{nombre}</h1>
        <img
          src={`${fotoUrl + foto}`|| placeholder}
          alt={nombre}
          width="200"
          height="200"
          style={{ objectFit: 'contain' }}
        />
        <h3 className='enunciado'>{disponible ? <span className= "enunciado-verde">Disponible</span> : <span className= "enunciado-rojo">Adoptado</span>}</h3>
      </div>
      <div className='contenedor-datos'>
        <h3 className='enunciado'> Datos de nuestro bichote</h3>
        <p><b>Fecha de nacimiento: </b>{String(fecha.getDate()).padStart(2, '0') + "/" + (fecha.getMonth() +1) + "/" + fecha.getFullYear()}</p>
        <p><b>Raza: </b>{raza}</p>
        <p><b>Tamaño: </b>{size}</p>
        <p><b>Sexo: </b>{sexo ? 'macho' : 'hembra'}</p>
        <p><b>Especie: </b>{perro ? 'perro' : 'gato'}</p>
        <p><b>Descripción: </b>{descripcion}</p>
        <ConfirmationButton
          confirmation="¿Estás seguro/a?"
          onConfirm={onDelete}
          disabled={isLoading}
        >
          Delete
        </ConfirmationButton>
      </div>
    </div>
  );
}

AdvertDetail.propTypes = {
  ...advert,
  photo: T.string,
  onDelete: T.func.isRequired,
  isLoading: T.bool,
};

AdvertDetail.defaultProps = {
  photo: null,
};

export default AdvertDetail;
