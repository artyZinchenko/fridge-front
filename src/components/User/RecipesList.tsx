import { Box, Skeleton, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import { getRecipesById } from '../../services/recipeServices';
import SkeletonRecipeArray from '../common/SkeletonRecipeArray';
import RecipeDisplay from '../Recipes/IndividualRecipes/RecipeDisplay';
import { FlexVertical } from '../styles/Global';

interface Props {
  ids: number[];
  token: string;
}

const RecipesList = ({ ids, token }: Props) => {
  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: ['user-recipes', ids],
    queryFn: async () => {
      const data = await getRecipesById(ids);
      if (data === undefined) throw new Error();
      return data;
    },
    enabled: !!token,
  });

  if (isError) {
    if (error instanceof Error) {
      console.log('error: ', error.message);
      return <span>Error: {error.message}</span>;
    }
    return <span>Error!</span>;
  }

  if (isLoading) {
    return (
      <FlexVertical className='py flex-gap'>
        <Skeleton animation='wave' variant='text' width='12em' height='2em' />
        <Box sx={{ paddingInline: '1em' }}>
          <div className='recipes-list'>
            <SkeletonRecipeArray />;
          </div>
        </Box>
      </FlexVertical>
    );
  }

  if (data.length < 1) {
    return (
      <FlexVertical>
        <Typography>Woops!</Typography>;
        <Typography>You don{"'"}t have any recipes saved</Typography>
      </FlexVertical>
    );
  }

  if (isSuccess) {
    return (
      <FlexVertical className='py flex-gap'>
        <Typography variant='h2'>Your recipes</Typography>
        <Box sx={{ paddingInline: '1em' }}>
          <div className='recipes-list'>
            {data.map((el) => {
              return <RecipeDisplay recipe={el} key={el.id} />;
            })}
          </div>
        </Box>
      </FlexVertical>
    );
  }

  return null;
};

export default RecipesList;
