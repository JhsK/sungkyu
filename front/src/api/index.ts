import { AxiosResponse } from 'axios';
import { currentUserType, JoinInput, LogInInput, postCreateType, PostModel, TagModel } from 'src/constant';
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

export const getPostsAPI: (
  option: 'DESC' | 'ASC',
  lastId?: number,
  search?: string,
  tagId?: string,
) => Promise<PostModel[]> = async (option, lastId, search, tagId) => {
  const { data } = await API.get(
    `/post?category=${option}&lastId=${lastId || 0}&search=${search || ''}&tag=${tagId || ''}`,
  );
  return data;
};

export const getPostsSearchAPI = async (query) => {
  const { data } = await API.get(`/post?search=${query}`);
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

export const getTagAPI: () => Promise<TagModel[]> = async () => {
  const { data } = await API.get('/tag');
  return data;
};

export const uploadImageAPI = async (params) => {
  const { data } = await API.post('/image', params);
  return data;
};

export const getMainPostsAPI = async () => {
  const { data } = await API.get<PostModel[]>('/post/main');
  return data;
};
