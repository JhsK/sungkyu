import { JoinInput, LogInInput, postCreateType } from 'src/constant';
import { API } from './api.config';

export const signUp = async (params: JoinInput) => API.post('/user/sign_up', params);
export const signIn = async (params: LogInInput) => API.post('/user/sign_in', params);
export const logOut = async () => API.post('/user/logout');

export const getAuth = async () => {
  const data = await API.get('/user');
  return data;
};

export const postCreateAPI = async (params: postCreateType) => {
  const { data } = await API.post('/post/create', params);
};
