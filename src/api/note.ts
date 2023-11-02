import { ApiResponseWithDataType } from '@/types/apiResponseType';
import { authInstance } from './axiosCustom';
import { NoteContentType, UserListType } from '@/types/note';

export const postNoteAPI = async (userId: number, content: string) => {
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
    >(`/notes/${userId}`);
    return response.data.data.reverse();
  } catch (e) {
    return Promise.reject(e);
  }
};
