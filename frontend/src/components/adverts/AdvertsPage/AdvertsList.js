import { useState } from 'react';
import T from 'prop-types';

import { advert } from '../propTypes';
import { useAuth } from '../../auth/context'
import Popup from './Popup';
import "./AdvertsList.css";
import placeholder from '../../../assets/images/placeholder.png';

let fotoUrl = `${process.env.REACT_APP_API_BASE_URL}/images/anuncios/`;
if (process.env.NODE_ENV === 'production') {
  fotoUrl = `${process.env.REACT_APP_API_BASE_URL_PROD}/images/anuncios/`
}

function Advert({ nombre, raza, size, foto, sexo, disponible, usuarioName}) {
  return (
    <div className='item'> 
      <h2>{nombre}</h2>
      <p><b>Raza: </b>{raza}</p>
      <p><b>Tamaño: </b>{size}</p>
      <p><b>Sexo: </b>{sexo ? 'Macho' : 'Hembra'}</p>
      <p>{disponible ? <span className= "enunciado-verde">Disponible</span> : <span className= "enunciado-rojo">Adoptado</span>}</p>
      <img className='Foto'
          src={`${fotoUrl + foto}`|| placeholder}
          alt={nombre}
          width="200"
          height="200"
          style={{ objectFit: 'contain' }}
        />
        <p><b>Publicado por: </b>{usuarioName}</p>
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

  return (<><button className='BotonDetalle' onClick={openPopup}>Más Información</button>
   {popupVisible && <Popup closePopup={closePopup}></Popup>}</>) 
}

function AdvertsList({ adverts }) {
  const { isLogged } = useAuth();
 
  const renderAdvert = ({_id, ...advert }) => (
    <li key={_id} className='AdvertsForm'>
      <Advert {...advert} />
      <a href={`/adverts/${_id}`} > 
      <button className='BotonDetalle'>Más Información</button>
      </a>
    </li>
  );

  const renderAdvertPublic = ({_id, ...advert }) => (
    
    <li key={_id} className='AdvertsForm'>
      <Advert {...advert} />
      <ShowDetails/>
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
