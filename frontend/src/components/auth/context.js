import { createContext, useContext, useState } from 'react';
import T from 'prop-types';
import client from '../../api/client';

const AuthContext = createContext();

export const useAuth = () => {
  const authValue = useContext(AuthContext);
  return authValue;
};

export const AuthProvider = ({ isInitiallyLogged, children }) => {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);
  const registerUser = async credentials => {
    try {
      await client.post('/usuarios', credentials); 
      console.log('Usuario registrado exitosamente');
    } catch (error) {
      console.error('Error en la solicitud:', error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ isLogged, handleLogin, handleLogout, registerUser }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  isInitallyLogged: T.bool,
  children: T.node,
};

AuthProvider.defaultProps = {
  children: null,
};

export default AuthContext;