import T from 'prop-types';

import useForm from '../../../hooks/useForm';
import './LoginForm.css';

const validEmail = ({ email }) => email;
const validPassword = ({ password }) => password;

function LoginForm({ onSubmit, isLoading }) {
  const {
    formValue: credentials,
    handleChange,
    handleSubmit,
    validate,
  } = useForm({
    email: '',
    password: '',
    remember: false,
  });
  const { email, password, remember } = credentials;

  return (
    <div className='row'>
      <div className='form-container'>
        <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
          <span className='login-form-title'>Iniciar sesión</span>
          <div className='login-form-text-info'>Correo electrónico</div>
          <input name="email" value={email} onChange={handleChange} placeholder='Introduce tu correo electrónico' />
          <div className='login-form-text-info'>Contraseña</div>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder='Introduce tu contraseña'
          />
          <input
            type="checkbox"
            name="remember"
            checked={remember}
            onChange={handleChange}
          />
          <button disabled={!validate(validEmail, validPassword, () => !isLoading)}>
            Iniciar sesión
          </button>
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
