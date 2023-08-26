import React from 'react';
import T from 'prop-types';

import { ConfirmationButton } from '../../common';
import placeholder from '../../../assets/images/placeholder.png';
import { advert } from '../propTypes';

function AdvertDetail({ nombre, venta, edad, raza, size, foto, sexo, perro, descripcion }, onDelete, isLoading) {
  return (
    <div>
      <p>{nombre}</p>
      <p>{venta ? 'Sell' : 'Buy'}</p>
      
      <p>{edad}</p>
      <p>{raza}</p>
      <p>{size}</p>
      <p>{sexo}</p>
      <p>{perro}</p>
      <p>{descripcion}</p>
      <img
        src={foto || placeholder}
        alt={nombre}
        width="200"
        height="200"
        style={{ objectFit: 'contain' }}
      />
      <ConfirmationButton
        confirmation="Are you sure?"
        onConfirm={onDelete}
        disabled={isLoading}
      >
        Delete
      </ConfirmationButton>
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
