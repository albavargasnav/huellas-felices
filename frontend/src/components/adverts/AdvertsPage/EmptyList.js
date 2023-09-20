import React from 'react';
import T from 'prop-types';
import './EmptyList.css'

import { Link } from 'react-router-dom';

function EmptyList({ advertsCount }) {
  return (
    <div className='EmptyList'>
      <p>No hay anuncios</p>
      {advertsCount > 0 ? ( 
      <p>Cambia tu búsqueda</p>
      ) : (
        <Link to="new" >Crear un nuevo anuncio</Link>
      )}
    </div>
  );
}

EmptyList.propTypes = {
  advertsCount: T.number.isRequired,
};

export default EmptyList;
