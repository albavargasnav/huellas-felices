import client, { configureClient, resetClient } from '../../api/client';
import storage from '../../utils/storage';

const authPath = '/login';

const verificationEmailPath = '/checkEmailRegistered'
const verificationTokenPath = '/verifytokenuser'

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

export const verificationToken = () => {
var urlActual = window.location.href;
console.log("URL actual: " + urlActual);
var parametros = new URLSearchParams(new URL(urlActual).search);
var token = parametros.get('token');
console.log(token);

  return client
    .post(`${verificationTokenPath}`, token, {
      headers: 
    {
      "Authorization": token,
      
    }})
    .then((response) => {
      if (response.status === 200) {
        return true;
      } else {
        return false;
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
