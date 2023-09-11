import React from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

import { advert } from '../propTypes';
import placeholder from '../../../assets/images/placeholder.png';
const fotoUrl = `${process.env.REACT_APP_API_BASE_URL}/images/anuncios/`;

function Advert({ nombre, raza, size, foto, sexo}) {
  return (
    <div>
      <p>{nombre}</p>
      <p><b>Raza: </b>{raza}</p>
      <p><b>Tamaño: </b>{size.join(', ')}</p>
      <p><b>Sexo: </b>{sexo ? 'Macho' : 'Hembra'}</p>
      <img
          src={`${fotoUrl + foto}`|| placeholder}
          alt={nombre}
          width="200"
          height="200"
          style={{ objectFit: 'contain' }}
        />
    </div>
  );
}

Advert.propTypes = {
  ...advert,
};

function AdvertsList({ adverts }) {
  const renderAdvert = ({_id, ...advert }) => (
    <li key={_id}>
      <Link to={_id}>
        <Advert {...advert} />
      </Link>
    </li>
  );

  return <ul>{adverts.map(renderAdvert)}</ul>;
}

AdvertsList.propTypes = {
  adverts: T.arrayOf(T.shape({_id: T.string.isRequired }).isRequired)
    .isRequired,
};

export default AdvertsList;
