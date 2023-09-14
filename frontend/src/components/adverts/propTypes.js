import T from 'prop-types';

export const advert = {
  nombre: T.string,
  disponible: T.bool,
  perro: T.bool.isRequired,
  raza: T.string.isRequired,
  sexo: T.bool.isRequired,
  size: T.arrayOf(T.string.isRequired).isRequired,
  foto: T.string
};
