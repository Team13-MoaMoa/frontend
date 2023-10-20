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
  headcount: string;
  job_tag: string[];
  user: User;
  tech_stack_list: TechStackList[];
  comment_count: number;
  created_at: Date;
};

export type TechStackList = {
  id: number;
};

export type User = {
  id: number;
  nickname: string;
  image_url: null;
};

export type Sort = {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
};
