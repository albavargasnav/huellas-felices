import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

function useMutation(mutation) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const resetError = () => setError(null);

  const execute = useCallback(
    async function (...args) {
      const startExecution = () => {
        resetError();
        setIsLoading(true);
      };

      const finishExecution = error => {
        setIsLoading(false);
        if (error) {
          return setError(error);
        }
      };

      startExecution();
      try {
        const result = await mutation(...args);
        finishExecution(null);
        return result;
      } catch (error) {
        finishExecution(error);
        if (error.statusCode === 401) {
          navigate('/login');
        }
        if (error.statusCode === 404) {
          navigate('/404');
        }
        throw error;
      }
    },
    [mutation, navigate],
  );

  return {
    isLoading,
    error,
    execute,
    resetError,
  };
}

export default useMutation;
