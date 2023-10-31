export type UserListType = {
  id: number;
  nickname: string;
  image_url: string | null;
};

export type NoteContentType = {
  user_id: number;
  content: string;
  created_at: string;
  sender: true;
};
