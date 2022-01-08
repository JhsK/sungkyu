import { API } from './api.config';

export const signUp = async (params) => API.post('/user/sign_up', params);
export const signIn = async (params) => API.post('/user/sign_in', params);
