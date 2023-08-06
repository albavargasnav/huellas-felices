import client, { configureClient, resetClient } from '../../api/client';
import storage from '../../utils/storage';

const authPath = '/login';

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

export const logout = () => {
  return Promise.resolve().then(resetClient).then(storage.clear);
};
