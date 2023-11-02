import { ApiResponseWithDataType } from '@/types/apiResponseType';
import { authInstance } from './axiosCustom';

export const postNoteAPI = async (userId: string, content: string) => {
  try {
    const response = await authInstance.post<ApiResponseWithDataType<{}>>(
      '/notes',
      { user_id: userId, content },
    );
    return response.data;
  } catch (e) {
    return Promise.reject(e);
  }
};
