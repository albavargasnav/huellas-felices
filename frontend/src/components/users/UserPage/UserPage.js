import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./UserDetail.css";
import UserDetail from './UserDetail';
import { getUserInfo, updateUserInfo } from '../service';

function UserPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    setIsLoading(true);
    getUserInfo(params.userId)
      .then(res => setUser(res))
      .catch(error => {
        if (error.status === 404) {
          return navigate('/404');
        }
        setError(error);
      });
    setIsLoading(false);
  }, [params.userId, navigate]);
  if (error?.status === 404) {
    return <Navigate to="/404" />;
  }

  const handleDelete = async event => {
  //  await deleteAdvert(advert._id);
  //  navigate('/');
  };

  return (
    user && (
      <UserDetail
        onDelete={handleDelete}
        isLoading={isLoading}
        {...user}
      />
    )
  );
}

export default UserPage;
