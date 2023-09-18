import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { register } from '../service';
import RegistrationForm from './RegistrationForm';
import useMutation from '../../../hooks/useMutation';

function RegistrationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoading, error, execute, resetError } = useMutation(register);

  const handleSubmit = credentials => {
    execute(credentials)
      .then(() => {
        setTimeout(() => {
          const from = location.state?.from?.pathname || '/login';
        navigate(from);
        }, 1000);
        
      })
  };
  
  return (
    <div>
      <RegistrationForm onSubmit={handleSubmit} isLoading={isLoading} resetError={resetError} error={error} />
    </div>
  );
}

export default RegistrationPage;
