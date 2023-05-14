import { UserState } from '@/store/user';

export type Step = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};

export type User = {
  id: number;
  nickname: string;
  image_url: string;
  github_url: string;
  portfolio_url: string;
};
