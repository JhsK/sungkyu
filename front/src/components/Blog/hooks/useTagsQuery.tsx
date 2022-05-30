import React from 'react';
import { useQuery } from 'react-query';
import { API } from 'src/api/api.config';
import { TagModel } from 'src/constant';
import { queryKeys } from 'src/hooks/queryKey';

const getTagAPI: () => Promise<TagModel[]> = async () => {
  const { data } = await API.get('/tag');
  return data;
};

const useTagsQuery = () => useQuery(queryKeys.tags, getTagAPI);

export default useTagsQuery;
