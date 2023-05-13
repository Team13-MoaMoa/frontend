export type BoardListResponseType = {
  code: string;
  message: string;
  data: BoardListDataType;
};

export type BoardListDataType = {
  content: BoardDataType[];
  pageable: string;
  last: boolean;
  totalPages: number;
  totalElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: SortType;
  numberOfElements: number;
  empty: boolean;
};

export type BoardDataType = {
  id: number;
  title: string;
  project_name: string;
  content: string;
  deadline: number[];
  headcount: number;
  job_position: string;
  user: UserType;
  tech_stack_list: TechStackListType[];
  comment_count: number;
};

export type TechStackListType = {
  id: number;
};

export type UserType = {
  id: number;
  nickname: string;
  image_url: null;
};

export type SortType = {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
};
