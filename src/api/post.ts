import { PostSubmit } from '@/types/post/post';
import { authInstance } from './axiosCustom';
import { ApiResponseWithDataType } from '@/types/apiResponseType';

export const onPostAPI = async (form: PostSubmit) => {
  try {
    const response = await authInstance.post<
      ApiResponseWithDataType<{ id: string }>
    >('/posts', form);
    return response.data.data;
  } catch (e) {
    return Promise.reject(e);
  }
};
