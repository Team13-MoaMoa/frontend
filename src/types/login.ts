export type Step = {
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

export type User = {
  id: number;
  nickname: string;
  image_url: string;
  github_url: string;
  portfolio_url: string;
};
