import { useRef } from 'react';

export const debounceWithChangeEvent = (
  fn: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
  delay: number
) => {
  const timer = useRef<NodeJS.Timeout>();

  return function (
    arg: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      fn(arg);
    }, delay);
  };
};
