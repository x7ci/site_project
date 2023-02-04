import { useEffect, useState } from 'react';

/** Custom hook to check whether component is mounted. Useful for SSR stuff, where client data is needed. */
const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  return isMounted;
};

export default useIsMounted;
