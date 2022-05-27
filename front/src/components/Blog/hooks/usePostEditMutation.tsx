import { useRouter } from 'next/router';
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
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation(postCreateAPI, {
    onSuccess: async () => {
      await queryClient.invalidateQueries(queryKeys.posts);
      router.replace('/blog');
    },
  });
};

export default usePostEditMutation;
