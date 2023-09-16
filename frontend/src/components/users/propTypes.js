import T from 'prop-types';

export const user = {
  nombre: T.string.isRequired,
  email: T.string.isRequired,
  password: T.string.isRequired,
  direccion: T.string.isRequired,
  documento: T.string.isRequired,
  telefono: T.string.isRequired,
  haTenidoMascotas: T.bool.isRequired
};
