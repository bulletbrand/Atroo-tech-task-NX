import React, { useState, useEffect } from 'react';
import { debounce } from '../utils/debounce';

export function useResize(ref: React.RefObject<HTMLDivElement>, time: number) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.clientWidth);
    }

    function handleResize() {
      if (ref.current) setWidth(ref.current.clientWidth);
    }

    const debouncedHandleResize = debounce(handleResize, time);

    window.addEventListener('resize', debouncedHandleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [ref]);

  return width;
}
