import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useAuth } from '../context';
import { login } from '../service';
import LoginForm from './LoginForm';
import useMutation from '../../../hooks/useMutation';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { handleLogin } = useAuth();
  const { isLoading, error, execute, resetError } = useMutation(login);

  const handleSubmit = credentials => {
    execute(credentials)
      .then(handleLogin)
      .then(() => {
        const from = location.state?.from?.pathname || '/';
        navigate(from);
      });
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit} isLoading={isLoading} />
      {isLoading && <p>...login in nodepop</p>}
      {error && (
        <div onClick={resetError} style={{ color: 'red' }}>
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
