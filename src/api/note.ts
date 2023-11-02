import { ApiResponseWithDataType } from '@/types/apiResponseType';
import { authInstance } from './axiosCustom';
import { NoteContentType, UserListType } from '@/types/note';

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

export const getNoteUserListAPI = async () => {
  try {
    const response = await authInstance.get<
      ApiResponseWithDataType<UserListType[]>
    >('/notes');
    return response.data;
  } catch (e) {
    return Promise.reject(e);
  }
};

export const getNoteContentAPI = async (userId: number) => {
  try {
    const response = await authInstance.get<
      ApiResponseWithDataType<NoteContentType[]>
    >('');
    return response.data;
  } catch (e) {
    return Promise.reject(e);
  }
};
