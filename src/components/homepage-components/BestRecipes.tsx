import { useQuery } from '@tanstack/react-query';
import { getBestRecipes } from '../../services/recipeServices';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Recipe } from '../../types';
import { setRandomRecipes } from '../../reducers/recipeSlice';
import RecipeDisplay from '../recipe-components/RecipeDisplay';

const BestRecipes = () => {
  const { isLoading, isError, isSuccess, data, error, fetchStatus } = useQuery<
    Recipe[]
  >({
    queryKey: ['homepage'],
    queryFn: getBestRecipes,
    staleTime: 1000 * 60 * 60,
  });

  if (fetchStatus === 'fetching') {
    console.log('fetching best recipes');
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    if (error instanceof Error) {
      console.log('error: ', error.message);
      return <span>Error: {error.message}</span>;
    }
    return <span>Error!</span>;
  }

  return (
    <div>
      {data.map((recipe) => {
        return <RecipeDisplay key={recipe.id} recipe={recipe} />;
      })}
    </div>
  );
};

export default BestRecipes;
