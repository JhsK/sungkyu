import { AxiosResponse } from 'axios';
import { currentUserType, JoinInput, LogInInput, postCreateType, PostModel } from 'src/constant';
import { API } from './api.config';

export const signUp = async (params: JoinInput) => API.post('/user/sign_up', params);
export const signIn = async (params: LogInInput) => API.post('/user/sign_in', params);
export const logOut = async () => API.post('/user/logout');

export const getAuth: () => Promise<AxiosResponse<currentUserType, any>> = async () => {
  const data = await API.get('/user');
  return data;
};

export const postCreateAPI = async (params: postCreateType) => {
  const { data } = await API.post('/post/create', params);
  return data;
};

export const getPostsAPI: () => Promise<PostModel[]> = async () => {
  const { data } = await API.get('/post');
  return data;
};

export const getPostAPI: (id: string) => Promise<PostModel> = async (id) => {
  const { data } = await API.get(`/post/${id}`);
  return data;
};

export const postUpdateAPI: ({ id, values }) => Promise<boolean> = async ({ id, values }) => {
  const { data } = await API.put(`/post/${id}`, values);
  return data;
};

export const postDeleteAPI: (id) => Promise<number> = async (id) => {
  console.log(id);
  const { data } = await API.delete(`/post/${id}`);
  return data;
};
