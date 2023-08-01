import client from '../../api/client';

const advertsPath = '/v1/adverts';

export const getTags = () => {
  return client.get(`${advertsPath}/tags`);
};

export const getAdverts = () => {
  return client.get(`${advertsPath}`);
};

export const getAdvert = advertId => {
  return client.get(`${advertsPath}/${advertId}`);
};

export const deleteAdvert = advertId => {
  return client.delete(`${advertsPath}/${advertId}`);
};

export const createAdvert = newAdvert => {
  return client.post(advertsPath, newAdvert, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
