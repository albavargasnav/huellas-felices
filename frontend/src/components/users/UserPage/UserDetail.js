import React, {useState, useEffect} from "react";
import T from 'prop-types';

import { user } from '../propTypes';

function UserDetail({ name, password, direccion, telefono, documento, haTenidoMascotas, onSubmit, isLoading, error, params }) {
  const [checked, setChecked] = useState(false);
  
  useEffect(() => {
    setChecked(haTenidoMascotas)
  }, [haTenidoMascotas]);
  
  const handleOnChange = () => {
    setChecked(!checked);
  };
  
  if (isLoading) {
    return 'Loading...';
  }

  return (
    <div className="contenedor-detalle">
        <h3 className='enunciado'> Datos del usuario</h3>
        <form onSubmit={onSubmit}>
          <fieldset>
            <div className='form-group'>
              <label>Nombre:</label>
              <input type="text" name="name" defaultValue={name} disabled={params.userId ? false : true }/>
            </div>
            <div className='form-group' style={{display: params.userId ? 'block' : 'none' }}>
              <label>Documento:</label>
              <input type="text" name="documento" defaultValue={documento} disabled={params.userId ? false : true }/>
            </div>
            <div className='form-group' style={{display: params.userId ? 'block' : 'none' }}>
              <label>Contraseña:</label>
              <input type="password" name="password" defaultValue={password} />
            </div>
            <div className='form-group' style={{display: params.userId ? 'block' : 'none' }}>
              <label>Repita Contraseña:</label>
              <input type="password" name="passwordRep" defaultValue={password} />
            </div>
            <div className='form-group' style={{display: params.userId ? 'block' : 'none' }}>
              <label>Direccion:</label>
              <input type="text" name="direccion" defaultValue={direccion} disabled={params.userId ? false : true }/>
            </div>
            <div className='form-group'style={{display: params.userId ? 'block' : 'none' }} >
              <label>Teléfono:</label>
              <input type="text" name="telefono" defaultValue={telefono} disabled={params.userId ? false : true }/>
            </div>
            <div className='form-group' style={{ display: params.userId ? 'flex' : 'none', alignItems: 'center' }}>
              <label>¿Ha tenido mascotas antes?</label>
              <input id="chk-mascotas" type="checkbox" name="haTenidoMascotas" 
              checked={checked}
              onChange={handleOnChange} disabled={params.userId ? false : true }/>
            </div>
            <div className='form-group'>
              <button id="boton-submit" type="submit" style={{display: params.userId ? 'block' : 'none' }}>Actualizar</button>
            </div>
            {error.mensaje !== '' ? <div className='div-error'>{error.mensaje}</div> : ''}
          </fieldset>
        </form>
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
