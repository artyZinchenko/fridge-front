import { getBestRecipes } from '../../../services/recipeServices';
import RecipeDisplay from '../IndividualRecipes/RecipeDisplay';
import { Fragment, useCallback, useRef } from 'react';
import styles from '../Recipes.module.scss';
import { useInfiniteQuery } from '@tanstack/react-query';
import SkeletonRecipeArray from '../../common/SkeletonRecipeArray';

type CallbackRef = (node: HTMLElement | null) => void;

interface Props {
  queryKey?: string;
}

const BestRecipes = ({ queryKey = 'homepage' }: Props) => {
  const observer = useRef<IntersectionObserver | null>(null);

  const fetchRecipes = async ({ pageParam = 0 }) => {
    const data = await getBestRecipes();

    return data;
  };

  const { data, error, isError, isLoading, fetchNextPage } = useInfiniteQuery({
    queryKey: [queryKey],
    queryFn: fetchRecipes,
    staleTime: 1000 * 60 * 20,
    getNextPageParam: (lastPage, pages) => lastPage,
  });

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.9,
  };

  const observerElementRef: CallbackRef = useCallback(
    (node) => {
      if (!node) return;

      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      }, options);

      if (node) observer.current && observer.current.observe(node);
    },
    [isLoading]
  );

  if (isLoading) {
    return (
      <div className={styles.recipesList}>
        <SkeletonRecipeArray />
      </div>
    );
  }

  if (isError) {
    if (error instanceof Error) {
      console.log('error: ', error.message);
      return <span>Error: {error.message}</span>;
    }
    return <span>Error!</span>;
  }

  return (
    <div className={styles.recipesList}>
      {data.pages.map((group, i) => {
        if (group)
          return (
            <Fragment key={i}>
              {group.map((recipe, i) => {
                return (
                  <div
                    ref={i === group.length - 1 ? observerElementRef : null}
                    key={i}
                  >
                    <RecipeDisplay recipe={recipe} />
                  </div>
                );
              })}
            </Fragment>
          );
      })}
      <SkeletonRecipeArray />
    </div>
  );
};

export default BestRecipes;
