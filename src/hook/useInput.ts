import React, { useCallback, useState } from 'react';

type ReturnType = [
  string,
  React.Dispatch<React.SetStateAction<string>>,
  (e: React.ChangeEvent<HTMLInputElement>) => void
];

export default function useInput(): ReturnType {
  const [data, setData] = useState('');

  const changeHandle = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  }, []);

  return [data, setData, changeHandle];
}
