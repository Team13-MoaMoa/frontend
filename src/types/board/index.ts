export type BoardCard = {
  id: number;
  title: string;
  projectName: string;
  content: string;
  deadline: number[];
  headcount: number;
  jobPosition: string;
  user: {
    id: number;
    nickname: string;
    imageUrl: string;
  };
  techStackList: number[];
  commentCount: number;
};
