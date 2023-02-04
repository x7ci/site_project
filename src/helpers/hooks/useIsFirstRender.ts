import { useRef } from 'react';

const useIsFirstRender = (): boolean => {
  const ref = useRef(true);
  const firstRender = ref.current;

  ref.current = false;

  return firstRender;
};

export default useIsFirstRender;
