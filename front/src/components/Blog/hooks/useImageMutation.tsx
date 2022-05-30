import { useMutation } from 'react-query';
import { API } from 'src/api/api.config';

const uploadImageAPI = async (param: FormData) => {
  const { data } = await API.post('/image', param);
  return data;
};

const useImageMutation = () => useMutation(uploadImageAPI);

export default useImageMutation;
