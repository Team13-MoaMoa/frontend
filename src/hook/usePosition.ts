import { useState } from 'react';

// '' 은 ALL을 의미
const INIT_POSITION = '';

export default function usePosition() {
  const [position, setPosition] = useState(INIT_POSITION);

  const onChangePosition = (position: string) => {
    setPosition(position);
  };

  return { position, onChangePosition };
}
