import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function useQuery(query) {
  const [data, setData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const startExecution = () => {
      setError(null);
      setIsLoading(true);
    };
    const finishExecution = (error, data) => {
      setIsLoading(false);
      if (error) {
        return setError(error);
      }
      setData(data);
    };
    const execute = async () => {
      startExecution();
      try {
        const result = await query();
        finishExecution(null, result);
      } catch (error) {
        finishExecution(error);
        if (error.statusCode === 401) {
          navigate('/login');
        }
        if (error.statusCode === 404) {
          navigate('/404');
        }
      }
    };
    execute();
  }, [query, navigate]);

  return {
    isLoading,
    error,
    data,
  };
}

export default useQuery;
