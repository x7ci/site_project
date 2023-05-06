import { useState, useEffect, useCallback } from 'react';

const useWidth = () => {
  const [width, setWidth] = useState(0);

  const handleResize = useCallback(() => setWidth(window.innerWidth), []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return width;
};

export default useWidth;
