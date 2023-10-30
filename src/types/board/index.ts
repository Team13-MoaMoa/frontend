export type ResponseBoardListType = {
  code: string;
  message: string;
  data: BoardListType;
};

export type BoardListType = {
  content: BoardType[];
  pageable: string;
  totalPages: number;
  totalElements: number;
  last: boolean;
  sort: Sort;
  numberOfElements: number;
  first: boolean;
  size: number;
  number: number;
  empty: boolean;
};

export type BoardType = {
  id: number;
  title: string;
  project_name: string;
  content: string;
  deadline: Date;
<<<<<<< HEAD
  headcount: number;
=======
  headcount: string;
>>>>>>> cab08a18296caf8400d23aa7e0228eecbbecfa9d
  job_tag: string[];
  user: User;
  tech_stack_list: TechStackList[];
  comment_count: number;
  created_at: Date;
};

<<<<<<< HEAD
=======
export type DetailBoardType = Omit<BoardType, 'comment_count'> & {
  comment_list: Comment[];
};

export type Comment = {
  id: number;
  content: string;
  user: {
    id: number;
    nickname: string;
    image_url: string;
  };
};

>>>>>>> cab08a18296caf8400d23aa7e0228eecbbecfa9d
export type TechStackList = {
  id: number;
};

export type User = {
  id: number;
  nickname: string;
<<<<<<< HEAD
  image_url: null;
=======
  image_url: string;
>>>>>>> cab08a18296caf8400d23aa7e0228eecbbecfa9d
};

export type Sort = {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
};
