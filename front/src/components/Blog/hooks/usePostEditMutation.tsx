import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { API } from 'src/api/api.config';
import { postCreateType } from 'src/constant';
import { queryKeys } from '../../../hooks/queryKey';

const postCreateAPI = async (params: postCreateType) => {
  const { data } = await API.post('/post/create', params);
  return data;
};

const usePostEditMutation = () => {
  const queryClient = useQueryClient();

  return useMutation(postCreateAPI, {
    onSuccess: () => {
      queryClient.invalidateQueries(['posts']);
    },
  });
};

export default usePostEditMutation;
