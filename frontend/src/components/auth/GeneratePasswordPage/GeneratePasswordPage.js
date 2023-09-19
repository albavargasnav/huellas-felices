import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { verificationToken } from '../service';
import useMutation from '../../../hooks/useMutation';

import GeneratePasswordForm from './GeneratePasswordForm';

function GeneratePasswordPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoading, error, execute, resetError } = useMutation(verificationToken);

  const handleSubmit = token => {
    execute(token)
      .then(() => {
        //const from = location.state?.from?.pathname || '/login';
        //navigate(from);
      });
  };

  return (
    <div>
      <GeneratePasswordForm onSubmit={handleSubmit} isLoading={isLoading} resetError={resetError} error={error}/>
    </div>
  );
}

export default GeneratePasswordPage;






