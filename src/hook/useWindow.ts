import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
export default function useWindow() {
  const isClient = typeof window === 'object';

  const getSize = () => {
    return { width: isClient ? window.innerWidth : undefined };
  };

  const [windowSize, setWindowsize] = useState(getSize);

  const handleResize = debounce(() => {
    setWindowsize(getSize);
  }, 500);

  useEffect(() => {
    if (!isClient) {
      return;
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize, isClient]);

  return windowSize;
}
