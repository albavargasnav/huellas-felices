import React,{ useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { register } from '../service';
import RegistrationForm from './RegistrationForm';
import useMutation from '../../../hooks/useMutation';

function RegistrationPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoading, error, execute, resetError } = useMutation(register);
  const [isRegisterUser, setRegisterUser] = useState(false);

  const handleSubmit = credentials => {
    execute(credentials)
      .then(() => {
        setRegisterUser(true);
      });
  };
  
  return (
    <div>
      <RegistrationForm onSubmit={handleSubmit} isLoading={isLoading} resetError={resetError} error={error} isRegisterUser={isRegisterUser} />
    </div>
  );
}

export default RegistrationPage;
