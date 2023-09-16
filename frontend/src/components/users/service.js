import client from '../../api/client';

const userPath = '/usuarios';

export const getUserInfo = userId => {
  return client.get(`${userPath}/${userId}`);
};

export const updateUserInfo = (userId, body) => {
    return client.put(`${userPath}/${userId}`, body);
};