import { useState } from 'react';

type ReturnType = [string, (e: React.ChangeEvent<HTMLInputElement>) => void];

export default function useInput(): ReturnType {
  const [input, setInput] = useState('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return [input, onChangeInput];