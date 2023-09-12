import React from 'react';
import T from 'prop-types';

import { ConfirmationButton } from '../../common';
import { user } from '../propTypes';

function UserDetail({ nombre, password, direccion, telefono, documento, haTenidoMascotas, onDelete, isLoading }) {
  return (
    <div className="contenedor-detalle">
      <div className='contenedor-datos'>
        <h3 className='enunciado'> Datos del usuario</h3>
        <form>
          <fieldset>
            <label>
              Nombre:
              <input type="text" name="name" value={nombre} />
            </label>
            <br/>
            <label>
              Password:
              <input type="text" name="name" value={password} />
            </label>
            <br/>
            <label>
              Direccion:
              <input type="text" name="name" value={direccion} />
            </label>
            <br/>
            <label>
              Teléfono:
              <input type="text" name="name" value={telefono} />
            </label>
            <br/>
            <label>
              ¿Ha tenido mascotas antes?
              <input type="checkbox" name="name" checked={haTenidoMascotas} />
            </label>
            <br/>
          </fieldset>
        </form>
        <ConfirmationButton
          confirmation="¿Estás seguro/a?"
          onConfirm={onDelete}
          disabled={isLoading}
        >
          Actualizar
        </ConfirmationButton>
      </div>
    </div>
  );
}

UserDetail.propTypes = {
  ...user,
  onDelete: T.func.isRequired,
  isLoading: T.bool,
};

UserDetail.defaultProps = {
  
};

export default UserDetail;
