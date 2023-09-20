import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { verificationEmail } from '../service';
import useMutation from '../../../hooks/useMutation';

import RecoveryForm from './RecoveryForm';

function RecoveryPasswordPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoading, error, execute, resetError } = useMutation(verificationEmail);
  const [isEmailSent, setIsEmailSent] = useState(false);

  const handleSubmit = credentials => {
    execute(credentials)
      .then(() => {
        setIsEmailSent(true);
      });
  };

  return (
    <div>
      <RecoveryForm onSubmit={handleSubmit} isLoading={isLoading} resetError={resetError} error={error} isEmailSent={isEmailSent}/>
      {isEmailSent && (
        <div className="confirmation-message">
          <p>El correo electrónico se ha enviado con éxito.</p>
        </div>
      )}
    </div>
  );
}

export default RecoveryPasswordPage;






