import { Divider, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { memo } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchFunctions } from '../../../data/fetchFunctions';
import ButtonTextField from '../../common/ButtonTextField';
import ModalSearch from '../../common/ModalSearch';
import SkeletonRecipeArray from '../../common/SkeletonRecipeArray';
import RecipeQuery from '../../RecipeQuery/RecipeQuery';
import { CenterChildElement } from '../../styles/Global';
import BestRecipes from '../HomepageRecipes/BestRecipes';
import RecipeDisplay from '../IndividualRecipes/RecipeDisplay';
import styles from '../Recipes.module.scss';

// by name = ?r=name+name
// by ingreds = ?q=ingred+ingred
// by filter = ?f=type+type+type

const RecipesPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const searchOptions = location.state;

  if (query === null)
    return (
      <div className='gap'>
        <CenterChildElement>
          <Typography variant='h2'>Just For You</Typography>
        </CenterChildElement>
        <div className={styles.recipesList}>
          <BestRecipes queryKey='recommended' />
        </div>
      </div>
    );

  const getRecipes = fetchFunctions[query];

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['search', searchOptions],
    queryFn: async () => {
      const data = await getRecipes(searchOptions);
      return data;
    },
    staleTime: 1000 * 60 * 5,
  });

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

  if (data.length < 1) {
    return <span>No recipes match your call</span>;
  }

  return (
    <div className={styles.recipesList}>
      {data.map((recipe) => {
        return <RecipeDisplay recipe={recipe} key={recipe.id} />;
      })}
    </div>
  );
};

RecipesPage.displayName = 'RecipePage';

export default RecipesPage;
