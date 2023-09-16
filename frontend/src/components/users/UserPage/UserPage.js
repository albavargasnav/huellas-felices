import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import "./UserDetail.css";
import UserDetail from './UserDetail';
import { getUserInfo, updateUserInfo } from '../service';

function UserPage() {
  const params = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState({status: 0, mensaje: ''});
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

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const userId = params.userId
    if (form.elements.password.value !== form.elements.passwordRep.value) {
      setError({status: 400, mensaje: "Los campos Contraseña y Repita contraseña no coinciden"})
      debugger
    } else {
      setError({status: 0, mensaje: ''})
      const body = {
        nombre: form.elements.nombre.value,
        direccion: form.elements.direccion.value,
        telefono: form.elements.telefono.value,
        documento: form.elements.documento.value,
        haTenidoMascotas: form.elements.haTenidoMascotas.checked   
      }
      if (form.elements.password.value) {
        body.password = form.elements.password.value
      }

      updateUserInfo(userId,body).then(() => navigate(`/adverts`))
    }
  }

  if (isLoading) {
    return 'Loading...';
  }

  return (
    user && (
      <UserDetail
        onSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
        {...user}
      />
    )
  );
}

export default UserPage;