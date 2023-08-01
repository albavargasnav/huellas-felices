import T from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '../context';

const RequireAuth = ({ children }) => {
  const { isLogged } = useAuth();
  const location = useLocation();

  if (!isLogged) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};

RequireAuth.propTypes = {
  children: T.node,
};

export default RequireAuth;
