import T from 'prop-types';
import useForm from '../../../hooks/useForm';
import './LoginForm.css';
import { Link } from 'react-router-dom';
import ErrorIcon from '../../../assets/images/icon-error.png' 

const validEmail = ({ email }) => email;
const validPassword = ({ password }) => password;

function LoginForm({ onSubmit, isLoading, resetError, error }) {
  const {
    formValue: credentials,
    handleChange,
    handleSubmit,
    validate,
  } = useForm({
    email: '',
    password: '',
    remember: true,
  });
  const { email, password} = credentials;
  return (
    <div className='row'>
      <div className='form-container'>
        <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
          <span className='login-form-title'>Iniciar sesión</span>
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
          <div className='login-form-register'> 
            <p>¿Eres un usuario nuevo?</p>
            <Link to="/register" className='registerBotton'>Empieza aquí</Link>
          </div>
          
          <button className='login-form-button' disabled={!validate(validEmail, validPassword, () => !isLoading)}>
            Iniciar sesión
          </button>

          <div className='login-form-text'>
            <span className='login-form-text-info'>¿Quieres recuperar tu contraseña?</span>
            <Link to="/recoverypassword">Haz clic aquí</Link>
          </div>
          
            
          {error && (
            <div class="form-error-container">
              {isLoading && <p>Accediendo a Huellas felices...</p>}
              <div className="error-message">
                <img src={ErrorIcon} alt="Error" style={{ marginRight: '5px', width: '20px', height: '20px' }} />
                <div onClick={resetError} style={{ color: 'black', fontWeight: 'bold' }}>
                  {error.menssage}
                </div>
              </div>
            </div>
          )}
          
        </form>
      </div>
    </div>
  );
}

LoginForm.propTypes = {
  isLoading: T.bool,
  onSubmit: T.func.isRequired,
};

export default LoginForm;
