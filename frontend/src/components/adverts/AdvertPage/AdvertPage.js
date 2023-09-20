import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./AdvertDetail.css";
import AdvertDetail from './AdvertDetail';
import { getAdvert, deleteAdvert } from '../service';
import { getUserInfo, getUserInfoByName } from '../../users/service';

function AdvertPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [advert, setAdvert] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    getAdvert(params.advertId)
      .then(res => setAdvert(res.result))
      .catch(error => {
        if (error.status === 404) {
          return navigate('/404');
        }
        setError(error);
      });
    setIsLoading(false);
  }, [params.advertId, navigate]);
  if (error?.status === 404) {
    return <Navigate to="/404" />;
  }

  const handleDelete = async event => {
    await deleteAdvert(advert._id);
    navigate('/');
  };

  return (
    advert && (
      <AdvertDetail
        onDelete={handleDelete}
        isLoading={isLoading}
        {...advert}
      />
    )
  );
}

export default AdvertPage;
