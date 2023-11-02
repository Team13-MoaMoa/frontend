import { useState } from 'react';

type ReturnType = [
  string,
  (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
  React.Dispatch<React.SetStateAction<string>>,
];

export default function useInput(): ReturnType {
  const [input, setInput] = useState('');

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setInput(e.target.value);
  };

  return [input, onChangeInput, setInput];
}
