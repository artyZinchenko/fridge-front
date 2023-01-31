import { BackgroundPaper } from '../../components/styles/Global';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import RecipeDisplay from '../../components/recipe-components/RecipeDisplay';

const RecipesPage = () => {
  const dispatch = useAppDispatch();
  const { apiRecipes } = useAppSelector((state) => state.recipes);

  return (
    <Box>
      <BackgroundPaper elevation={2}>
        {apiRecipes.map((recipe) => {
          return <RecipeDisplay key={recipe.id} recipe={recipe} />;
        })}
      </BackgroundPaper>
    </Box>
  );
};

export default RecipesPage;
