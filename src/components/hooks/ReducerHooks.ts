import { useAppSelector } from '../../hooks';
import { Recipe } from '../../types';

export const useApiRecipes = () => {
  const { apiRecipes }: { apiRecipes: Recipe[] } = useAppSelector(
    (state) => state.recipes
  );
  return apiRecipes;
};
