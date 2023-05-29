import { useState } from 'react';

const INIT_POSITION = 'ALL';

export default function usePosition() {
  const [position, setPosition] = useState(INIT_POSITION);

  const onChangePosition = (position: string) => {
    setPosition(position);
  };

  return { position, onChangePosition };
}
