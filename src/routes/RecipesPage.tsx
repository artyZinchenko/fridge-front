import { BackgroundPaper } from '../components/styles/Global';
import { Box } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../hooks';
import Layout from '../components/common/Layout';
import RecipeDisplay from '../components/recipe-components/RecipeDisplay';

const RecipesPage = () => {
  const dispatch = useAppDispatch();
  const { apiRecipes } = useAppSelector((state) => state.recipes);

  return (
    <Layout>
      <BackgroundPaper elevation={2}>
        {apiRecipes.map((recipe) => {
          return <RecipeDisplay key={recipe.id} recipe={recipe} />;
        })}
      </BackgroundPaper>
    </Layout>
  );
};

export default RecipesPage;
