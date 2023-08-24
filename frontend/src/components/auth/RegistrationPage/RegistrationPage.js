import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../context';
import RegistrationForm from './RegistrationForm';
import useMutation from '../../../hooks/useMutation';

function RegistrationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { registerUser } = useAuth();
  const { isLoading, error, execute, resetError } = useMutation(registerUser);

  const handleSubmit = credentials => {
    execute(credentials)
      .then(() => {
        const from = location.state?.from?.pathname || '/';
        navigate(from);
      })
      .catch(error => {
        console.error('Error al registrarse', error);
      });
  };
  
  return (
    <div>
      <RegistrationForm onSubmit={handleSubmit} isLoading={isLoading} resetError={resetError} error={error} />
    </div>
  );
}

export default RegistrationPage;
