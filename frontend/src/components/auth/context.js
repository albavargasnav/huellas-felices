import { createContext, useContext, useState } from 'react';
import T from 'prop-types';

const AuthContext = createContext();

export const useAuth = () => {
  const authValue = useContext(AuthContext);
  return authValue;
};

export const AuthProvider = ({ isInitiallyLogged, children }) => {
  const [isLogged, setIsLogged] = useState(isInitiallyLogged);

  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);

  return (
    <AuthContext.Provider value={{ isLogged, handleLogin, handleLogout }}>
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
