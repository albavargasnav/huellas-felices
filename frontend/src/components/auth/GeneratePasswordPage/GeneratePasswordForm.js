import React, { useState } from 'react';
import T from 'prop-types';

import useForm from '../../../hooks/useForm';
import '../LoginPage/LoginForm.css';

import ErrorIcon from '../../../assets/images/icon-error.png'
import IconVerified from '../../../assets/images/icon-verified.png'

function GeneratePasswordForm({ onSubmit, isLoading, resetError, error, isEmailSent }) {
  const {
    formValue: credentials,
    handleChange,
    handleSubmit,
  } = useForm({
    password: '',
  });

  const { password } = credentials;

  return (
    <div className='row'>
      <div className='form-container'>
        <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
          <span className='login-form-title'>Crea tu nueva contraseña</span>
          <div className='login-form-text'>
            <span className='login-form-text-info'>Nueva Contraseña</span>
          </div>
          <input className='login-form-text-area'
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <button className='login-form-button'>
            Generar nueva contraseña
          </button>

          {isEmailSent && (
            <div class="form-successful-container">
              <div className="confirmation-message">
                <img src={IconVerified} alt="Error" style={{ marginRight: '20px', width: '20px', height: '20px' }} />
                <p style={{ color: 'white', fontWeight: 'bold' }}>Se ha reestablecido la contraseña. Inicia sesión para volver a acceder a tu cuenta.</p>
              </div>
            </div>
          )}

          {error && (
            <div class="form-error-container">
              {isLoading && <p>Accediendo a huellas felices...</p>}
              <div className="error-message">
                <img src={ErrorIcon} alt="Error" style={{ marginRight: '5px', width: '20px', height: '20px' }} />
                <div onClick={resetError} style={{ color: 'black', fontWeight: 'bold' }}>
                  {error.message}
                </div>
              </div>
            </div>
          )}
          
        </form>
      </div>
    </div>
  );
}

GeneratePasswordForm.propTypes = {
  isLoading: T.bool,
  onSubmit: T.func.isRequired,
};

export default GeneratePasswordForm;
