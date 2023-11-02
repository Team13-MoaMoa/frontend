import { PostSubmit } from '@/types/post/post';
import { authInstance } from './axiosCustom';
import { ApiResponseWithDataType } from '@/types/apiResponseType';
import { DetailBoardType } from '@/types/board';

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

export const getPostAPI = async (postId: string) => {
  try {
    const response = await authInstance.get<
      ApiResponseWithDataType<DetailBoardType>
    >(`/posts/${postId}`);
    return response.data.data;
  } catch (e) {
    return Promise.reject(e);
  }
};
