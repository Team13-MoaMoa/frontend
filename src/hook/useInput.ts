import React, { useState } from 'react';

type ReturnType = [string, (e: React.ChangeEvent<HTMLInputElement>) => void];

export default function useInput(): ReturnType {
  const [data, setData] = useState('');

  const changeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  return [data, changeHandle];
}
