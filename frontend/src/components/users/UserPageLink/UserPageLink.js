import { useAuth } from '../../auth/context';
import jwtDecode from 'jwt-decode'
import { getAuthorizationHeader } from '../../../api/client';
import '../../layout/Navbar.css';

const UserPageLink = () => {
    
    const { isLogged } = useAuth();
    let ruta = ''
    if (isLogged) {
        const jwt = getAuthorizationHeader();
        const payload = jwtDecode(jwt);
        ruta = '/users/'+payload._id;
    }
    
    return isLogged ? (
    <>
        <a href={ruta}>Mi Perfil</a>
    </>
    ) : '';
};


export default UserPageLink;