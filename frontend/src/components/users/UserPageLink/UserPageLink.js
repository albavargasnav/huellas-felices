import { useAuth } from '../../auth/context';
import jwtDecode from 'jwt-decode'
import { getAuthorizationHeader } from '../../../api/client';
import '../../layout/Navbar.css';

const UserPageLink = ({usuarioName, ...props}) => {

    const { isLogged } = useAuth();
    let ruta = ''
    let rutaName = ''
    if (isLogged) {
        const jwt = getAuthorizationHeader();
        const payload = jwtDecode(jwt);
        ruta = '/users/'+payload._id;
        rutaName = '/users/name/' + usuarioName

    }

    return isLogged ? (
    <>
    {usuarioName ? <p><b>Publicado por: </b><a href={rutaName}><span className='span-usuario'>{usuarioName}</span></a></p> : <a href={ruta}>Mi Perfil</a>}
    </>
    ) : '';
};
export default UserPageLink;