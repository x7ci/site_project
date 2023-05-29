import { debounce } from 'lodash';
import { useState, useRef, useEffect, useCallback } from 'react';

interface Props {
  debounceMs?: number
}

const useElementWidth = <T extends HTMLElement>({ debounceMs }: Props) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<T>(null);

  const updateWidth = useCallback(debounce((width) => setWidth(width), debounceMs), [debounceMs]);

  useEffect(() => {
    let observer;

    if (debounceMs) {
      observer = new ResizeObserver((entries) => {
        updateWidth(entries[0].contentRect.width);
      });
    } else {
      observer = new ResizeObserver((entries) => {
        setWidth(entries[0].contentRect.width);
      });
    }

    if (ref.current) {
      observer.observe(ref.current);
    }

    const refToDispose = ref.current;

    return () => {
      if (refToDispose) {
        observer.unobserve(refToDispose);
      }
    };
  }, [debounceMs, updateWidth]);

  return {
    width,
    ref
  };
};

export default useElementWidth;
