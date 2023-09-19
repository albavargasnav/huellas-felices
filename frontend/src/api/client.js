/* eslint-disable no-restricted-globals */
import axios from 'axios';

let baseUrl = `${process.env.REACT_APP_API_BASE_URL}/api`;

if (process.env.NODE_ENV === 'production') {
  baseUrl = `${process.env.REACT_APP_API_BASE_URL_PROD}/api`
}

const client = axios.create({
  baseURL: baseUrl,
});

const setAuthorizationHeader = token => {
  client.defaults.headers.common['Authorization'] = `${token}`;
};


const removeAuthorizationHeader = () => {
  delete client.defaults.headers.common['Authorization'];
};

client.interceptors.response.use(
  response => response.data,
  error => {
    if (!error.response) {
      return Promise.reject({ message: error.message });
    }
   
    return Promise.reject({
      message: error.response.statusText,
      statusCode: error.response.status,
      ...error.response.data,
    });
  },
);

export const configureClient = ({ jwt }) => {
  if (jwt) {
    setAuthorizationHeader(jwt);
  }
};

export const resetClient = () => {
  removeAuthorizationHeader();
};

export const getAuthorizationHeader = () => {
  return client.defaults.headers.common['Authorization'];
};

export default client;
