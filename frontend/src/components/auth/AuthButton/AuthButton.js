import { useState } from 'react';
import { Link } from 'react-router-dom';

import { logout } from '../service';
import useMutation from '../../../hooks/useMutation';
import { useAuth } from '../context';
import '../../layout/Navbar.css';
import './AuthButton.css';

const AuthButton = () => {
  const { isLogged, handleLogout } = useAuth();
  const mutation = useMutation(logout);
  const [showPopup, setShowPopup] = useState(false);

  const handleLogoutConfirm = async () => {
    await mutation.execute();
    handleLogout();
    setShowPopup(false)
  };

  return isLogged ? (
    <>
      {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <p>¿Estás seguro de querer cerrar la sesión?</p>
            <button onClick={handleLogoutConfirm}>Confirmar</button>
            <button onClick={() => setShowPopup(false)}>Cancelar</button>
          </div>
        </div>
      )}
      <button className='button-cerrarSesion' onClick={() => setShowPopup(true)}>Cerrar sesión</button>
    </>
  ) : (
    <Link to="/login">Iniciar sesión</Link>
  );
};


export default AuthButton;
