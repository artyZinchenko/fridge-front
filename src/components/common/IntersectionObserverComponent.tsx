import {
  FetchNextPageOptions,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import { useRef, useCallback } from 'react';

import { Recipe } from '../../types';

interface Props {
  callback: (
    options?: FetchNextPageOptions | undefined
  ) => Promise<InfiniteQueryObserverResult<Recipe[], unknown>>;
  isLoading: boolean;
}

type CallbackRef = (node: HTMLDivElement | null) => void;

const IntersectionObserverComponent = ({ callback, isLoading }: Props) => {
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1,
  };

  const observer = useRef<IntersectionObserver | null>(null);

  const observerElementRef: CallbackRef = useCallback(
    (node) => {
      if (!node) return;

      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          callback();
        }
      }, options);

      if (node) observer.current && observer.current.observe(node);
    },
    [isLoading]
  );

  return <div>Observer</div>;
};
export default IntersectionObserverComponent;
