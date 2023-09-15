import { useState } from 'react';
import T from 'prop-types';
import { Link } from 'react-router-dom';

import { advert } from '../propTypes';
import { useAuth } from '../../auth/context'
import Popup from './Popup';
import "./AdvertsList.css";
import placeholder from '../../../assets/images/placeholder.png';
const fotoUrl = `${process.env.REACT_APP_API_BASE_URL}/images/anuncios/`;

function Advert({ nombre, raza, size, foto, sexo, disponible}) {
  return (
    <div className='AdvertsForm'> 
      <p>{nombre}</p>
      <p><b>Raza: </b>{raza}</p>
      <p><b>Tamaño: </b>{size}</p>
      <p><b>Sexo: </b>{sexo ? 'Macho' : 'Hembra'}</p>
      <p>{disponible ? 'Disponible' : 'Adoptado'}</p>
      <img
          src={`${fotoUrl + foto}`|| placeholder}
          alt={nombre}
          width="200"
          height="200"
          style={{ objectFit: 'contain' }}
        />
    </div>
  );
}

Advert.propTypes = {
  ...advert,
};

const ShowDetails = ({_id}) => {
  
  const [popupVisible, setPopupVisible] = useState(false);

  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  return (<><button onClick={openPopup}>Más Información</button>
   {popupVisible && <Popup closePopup={closePopup}></Popup>}</>) 
}

function AdvertsList({ adverts }) {
  const { isLogged } = useAuth();
 
  const renderAdvert = ({_id, ...advert }) => (
    <li key={_id}>
      <Advert {...advert} />
      <Link to={_id}> 
      <button>Más Información</button>
      </Link>
    </li>
  );

  const renderAdvertPublic = ({_id, ...advert }) => (
    <li key={_id}>
      <Advert {...advert} />
      <ShowDetails>
        Mas Información
      </ShowDetails>
    </li>
  );
    return isLogged ? (<ul>{adverts.map(renderAdvert)}</ul>) :
    (<ul>{adverts.map(renderAdvertPublic)}</ul>)
}

AdvertsList.propTypes = {
  adverts: T.arrayOf(T.shape({_id: T.string.isRequired }).isRequired)
    .isRequired,
};

export default AdvertsList;
