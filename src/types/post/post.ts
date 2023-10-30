export type PostType = {
  id: number;
  title: string;
  project_name: string;
  content: string;
  deadline: Date;
  headcount: number;
  job_position: string;
  user: User;
  tech_stack_list: TechStackList[];
  comment_list: CommentType[];
};

export type CommentType = {
  id: number;
  content: string;
  user: User;
};

export type User = {
  id: number;
  nickname: string;
  image_url: string;
};

export type TechStackList = {
  id: number;
};
<<<<<<< HEAD
=======

export type PostSubmit = {
  title: string;
  project_name: string;
  content: string;
  deadline: string;
  headcount: string;
  job_tag: string[];
  tech_stack_arr: string[];
};
>>>>>>> cab08a18296caf8400d23aa7e0228eecbbecfa9d
