import T from 'prop-types';

import useForm from '../../../hooks/useForm';
import '../LoginPage/LoginForm.css';

import ErrorIcon from '../../../assets/images/icon-error.png' 

const validName = ({ name }) => name;
const validEmail = ({ email }) => email;
const validPassword = ({ password }) => password;
const validRepeatedPassword = ({ password, repeatPassword }) => password === repeatPassword;

function RegistrarionForm({ onSubmit, isLoading, resetError, error }) {
  const {
    formValue: credentials,
    handleChange,
    handleSubmit,
    validate,
  } = useForm({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });
  const { name, email, password, repeatPassword } = credentials;

  return (
    <div className='row'>
      <div className='form-container'>
        <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
          <span className='login-form-title'>Registro de usuario</span>
          <div className='login-form-text'>
            <span className='login-form-text-info'>Crear usuario</span>
          </div>
          <input className='login-form-text-area' name="name" value={name} onChange={handleChange} />
          <div className='login-form-text'>
            <span className='login-form-text-info'>Correo electrónico</span>
          </div>
          <input className='login-form-text-area' name="email" value={email} onChange={handleChange} />
          <div className='login-form-text'>
            <span className='login-form-text-info'>Contraseña</span>
          </div>
          <input className='login-form-text-area'
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <div className='login-form-text'>
            <span className='login-form-text-info'>Repetir contraseña</span>
          </div>
          <input
            className='login-form-text-area'
            type='password'
            name='repeatPassword'
            value={repeatPassword}
            onChange={handleChange}
          />
          <button className='login-form-button' disabled={!validate(validName, validEmail, validPassword, validRepeatedPassword, () => !isLoading)}>
            Registrar usuario
          </button>
          
            
          {error && (
            <div class="form-error-container">
              {isLoading && <p>Accediendo a Huellas felices...</p>}
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

RegistrarionForm.propTypes = {
  isLoading: T.bool,
  onSubmit: T.func.isRequired,
};

export default RegistrarionForm;