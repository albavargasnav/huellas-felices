import client, { configureClient, resetClient } from '../../api/client';
import storage from '../../utils/storage';

const authPath = '/login';

const verificationEmailPath = '/checkEmailRegistered'

export const verificationEmail = (email) => {
  return client
    .post(`${verificationEmailPath}`, email)
    .then((response) => {
      if (response.status === 200) {
        return true;
      } else {
        return false;
      }
    })
}

export const verificationToken = (credentials) => {
  var urlActual = window.location.href;
  var parametros = new URLSearchParams(new URL(urlActual).search);
  var token = parametros.get('token');
  return client.post('/generateNewUserPassword', credentials, {
    headers:
    {
      "Authorization": token,
    }
  })
}
  

export const login = ({ remember, ...credentials }) => {
  return client
    .post(`${authPath}`, credentials)
    .then(({ jwt }) => {
      configureClient({ jwt });
      return jwt;
    })
    .then(jwt => {
      storage.remove('jwt');
      if (remember) {
        storage.set('jwt', jwt);
      }
    });
};
export const register = ({ remember, ...credentials }) => {
  return client.post('/usuarios', credentials)
};
export const logout = () => {
  return Promise.resolve().then(resetClient).then(storage.clear);
};
