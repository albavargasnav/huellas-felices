import React from 'react';
import T from 'prop-types';

import { Link } from 'react-router-dom';

function EmptyList({ advertsCount }) {
  return (
    <div>
      <p>No hay anuncios</p>
      {advertsCount > 0 ? (
        'Cambia tu búsqueda'
      ) : (
        <Link to="new">Crear un nuevo anuncio</Link>
      )}
    </div>
  );
}

EmptyList.propTypes = {
  advertsCount: T.number.isRequired,
};

export default EmptyList;
