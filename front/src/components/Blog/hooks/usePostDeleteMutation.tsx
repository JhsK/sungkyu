import React from 'react';
import { useMutation } from 'react-query';
import { API } from 'src/api/api.config';

const postDeleteAPI = async (id: number) => {
  const { data } = await API.delete(`/post/${id}`);
  return data;
};

const usePostDeleteMutation = () => useMutation(postDeleteAPI);

export default usePostDeleteMutation;
