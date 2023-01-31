import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { Recipe } from '../../types';
import { Box, Typography } from '@mui/material';
import { FlexSpaceBetween, FlexVertical } from '../styles/Global';
import Icons from './Icons';
import { useState } from 'react';
import MeasurmentOptions from './MeasurmentOptions';
import IngredientList from './IngredientList';

// 352

const DetailedRecipe = () => {
  const { id } = useParams();
  const [metric, setMetric] = useState<boolean>(true);
  const { apiRecipes }: { apiRecipes: Recipe[] } = useAppSelector(
    (state) => state.recipes
  );
  const recipe = apiRecipes.find((el) => el.id === Number(id));

  return (
    <div>
      {recipe ? (
        <FlexVertical sx={{ alignItems: 'flex-start' }}>
          <Box>
            <img src={recipe.image} alt={recipe.title} />
            <Icons recipe={recipe} />
          </Box>
          <Typography variant='h6'>{recipe.title}</Typography>
          <Typography variant='subtitle1'>{recipe.creditsText}</Typography>
          <FlexSpaceBetween sx={{ paddingInline: '2em' }}>
            <Box sx={{ width: '100%', borderRight: '1px solid lightgray' }}>
              <FlexVertical>
                <Typography variant='h6'>
                  {recipe.extendedIngredients.length}
                </Typography>
                <Typography variant='subtitle2'>Ingredients</Typography>
              </FlexVertical>
            </Box>
            <Box sx={{ width: '100%', borderRight: '1px solid lightgray' }}>
              <FlexVertical>
                <Typography variant='h6'>{recipe.readyInMinutes}</Typography>
                <Typography variant='subtitle2'>Minutes</Typography>
              </FlexVertical>
            </Box>
            <Box sx={{ width: '100%' }}>
              <FlexVertical>
                <Typography variant='h6'>{recipe.aggregateLikes}</Typography>
                <Typography variant='subtitle2'>Likes</Typography>
              </FlexVertical>
            </Box>
          </FlexSpaceBetween>
          <FlexSpaceBetween sx={{ padding: '1em' }}>
            <FlexVertical sx={{ alignItems: 'flex-start' }}>
              <Typography variant='h6'>Ingredients</Typography>
              <MeasurmentOptions metric={metric} setMetric={setMetric} />
            </FlexVertical>
            <Box>
              <Typography>{recipe.servings} servings</Typography>
            </Box>
          </FlexSpaceBetween>
          <IngredientList
            metric={metric}
            ingredients={recipe.extendedIngredients}
          />
        </FlexVertical>
      ) : (
        <Typography>Recipe not found...</Typography>
      )}
    </div>
  );
};

export default DetailedRecipe;
