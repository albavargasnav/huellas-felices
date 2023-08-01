import { useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import AdvertDetail from './AdvertDetail';
import { getAdvert, deleteAdvert } from '../service';
import useQuery from '../../../hooks/useQuery';
import useMutation from '../../../hooks/useMutation';

function AdvertPage() {
  const { advertId } = useParams();
  const navigate = useNavigate();
  const getAdvertById = useCallback(() => getAdvert(advertId), [advertId]);
  const { isLoading, data: advert } = useQuery(getAdvertById);
  const mutation = useMutation(deleteAdvert);

  const handleDelete = () => {
    mutation.execute(advertId).then(() => navigate('/'));
  };

  if (isLoading) {
    return 'Loading...';
  }

  return (
    advert && (
      <AdvertDetail
        onDelete={handleDelete}
        isLoading={mutation.isLoading}
        {...advert}
      />
    )
  );
}

export default AdvertPage;
