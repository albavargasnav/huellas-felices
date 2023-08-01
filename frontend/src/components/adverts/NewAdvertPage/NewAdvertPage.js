import React from 'react';
import { useNavigate } from 'react-router-dom';

import { createAdvert } from '../service';
import NewAdvertForm from './NewAdvertForm';
import useMutation from '../../../hooks/useMutation';

function NewAdvertPage() {
  const navigate = useNavigate();
  const { execute, isLoading } = useMutation(createAdvert);

  const handleSubmit = newAdvert => {
    execute(newAdvert).then(({ id }) => navigate(`/adverts/${id}`));
  };

  return <NewAdvertForm onSubmit={handleSubmit} isLoading={isLoading} />;
}

export default NewAdvertPage;
