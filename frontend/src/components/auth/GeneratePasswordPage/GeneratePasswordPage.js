import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { verificationToken } from '../service';
import useMutation from '../../../hooks/useMutation';

import GeneratePasswordForm from './GeneratePasswordForm';

function GeneratePasswordPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoading, error, execute, resetError } = useMutation(verificationToken);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = credentials => {
    execute(credentials)
      .then(() => {
        setIsEmailSent(true);
      });
  };

  return (
    <div>
      <GeneratePasswordForm onSubmit={handleSubmit} isLoading={isLoading} resetError={resetError} error={error} isEmailSent={isEmailSent}/>
    </div>
  );
}

export default GeneratePasswordPage;






