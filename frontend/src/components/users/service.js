import client from '../../api/client';

const userPath = '/usuarios';

export const getUserInfo = userId => {
  return client.get(`${userPath}/${userId}`);
};

export const getUserInfoByName = name => {
  return client.get(`${userPath}/name/${name}`);
};

export const updateUserInfo = (userId, body) => {
    return client.put(`${userPath}/${userId}`, body);
};
