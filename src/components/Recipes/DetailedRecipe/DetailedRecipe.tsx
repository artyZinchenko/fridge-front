import { Recipe } from '../../../types';
import { Box, Button, Divider, styled, Typography } from '@mui/material';
import { FlexSpaceBetween, FlexVertical } from '../../styles/Global';
import { useEffect, useState } from 'react';
import MeasurmentOptions from './MeasurmentOptions';
import IngredientList from './IngredientList';
import { useLocation } from 'react-router-dom';
import styles from './DetailedRecipe.module.scss';
import AddAll from './components/AddAll';
import RecipeTags from './components/RecipeTags';
import { getUserData, userSaveRecipe } from '../../../services/userServices';
import { UserAuth } from '../../../context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { useModalContext } from '../../../context/ModalContext';
import SignInModal from '../../User/SignInModal';
import SaveButton from './components/SaveButton';

const StyledDivider = styled(Divider)({
  borderColor: 'gray',
});

const DetailedRecipe = () => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [saved, setSaved] = useState(false);
  const [metric, setMetric] = useState<boolean>(true);
  const [enabled, setEnabled] = useState(false);

  const { token, resolvingUser } = UserAuth();
  const { setSignInModalOpen } = useModalContext();
  const location = useLocation();

  useEffect(() => {
    if (!resolvingUser && !token) setEnabled(true);
  });

  useEffect(() => {
    if (location.state) {
      setRecipe(location.state);
    } else {
      const recipeFromLocalStorage = window.localStorage.getItem('recipeData');
      if (recipeFromLocalStorage) {
        const paresedRecipe = JSON.parse(recipeFromLocalStorage);
        setRecipe(paresedRecipe);
        window.localStorage.removeItem('recipeData');
      }
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { data } = useQuery({
    queryKey: ['user-data'],
    queryFn: async () => {
      const data = await getUserData(token);
      const saved = !!data.recipes.find((el: number) => {
        return Number(el) === recipe?.id;
      });

      setSaved(saved);
      setEnabled(true);
      return data;
    },
    enabled: !!recipe && !!token,
  });

  const handleSaveRecipe = async () => {
    if (!recipe) return;
    if (!data) {
      window.localStorage.setItem('recipeData', JSON.stringify(recipe));
      setSignInModalOpen(true);
      return;
    }
    const response = await userSaveRecipe(token, recipe.id);
    if (response) setSaved(true);
  };

  return (
    <div className={`${styles.container} py`}>
      {recipe ? (
        <div>
          <FlexVertical sx={{ alignItems: 'flex-start' }}>
            <div className={`${styles.recipeTop} flex-gap px`}>
              <Box>
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className={styles.image}
                />
              </Box>
              <div className={`${styles.description}`}>
                <Typography variant='h6'>{recipe.title}</Typography>
                <Typography variant='subtitle1'>
                  {recipe.creditsText}
                </Typography>
                <FlexSpaceBetween>
                  <Box
                    sx={{ width: '100%', borderRight: '1px solid lightgray' }}
                  >
                    <FlexVertical>
                      <Typography variant='h6'>
                        {recipe.extendedIngredients.length}
                      </Typography>
                      <Typography variant='subtitle2'>Ingredients</Typography>
                    </FlexVertical>
                  </Box>
                  <Box
                    sx={{ width: '100%', borderRight: '1px solid lightgray' }}
                  >
                    <FlexVertical>
                      <Typography variant='h6'>
                        {recipe.readyInMinutes}
                      </Typography>
                      <Typography variant='subtitle2'>Minutes</Typography>
                    </FlexVertical>
                  </Box>
                  <Box sx={{ width: '100%' }}>
                    <FlexVertical>
                      <Typography variant='h6'>
                        {recipe.aggregateLikes}
                      </Typography>
                      <Typography variant='subtitle2'>Likes</Typography>
                    </FlexVertical>
                  </Box>
                </FlexSpaceBetween>

                <FlexSpaceBetween className='py'>
                  <a href={recipe.sourceUrl} target='_blank' rel='noreferrer'>
                    <Button variant='contained'>Read Directions</Button>
                  </a>
                  <SaveButton
                    saved={saved}
                    saveRecipe={handleSaveRecipe}
                    enabled={enabled}
                  />
                </FlexSpaceBetween>
              </div>
            </div>
            <StyledDivider />
            <div className='px'>
              <div className='py flex-media'>
                <Typography variant='h6'>Ingredients</Typography>
                <div className='flex-row'>
                  <MeasurmentOptions metric={metric} setMetric={setMetric} />
                  <div className={styles.measurements}>
                    <Typography>{recipe.servings} servings</Typography>
                  </div>
                </div>
              </div>
              <IngredientList
                data={data}
                metric={metric}
                ingredients={recipe.extendedIngredients}
              />
              <AddAll
                extendedIngredients={recipe.extendedIngredients}
                token={token}
                data={data}
              />
              <RecipeTags recipe={recipe} />
            </div>
          </FlexVertical>
        </div>
      ) : (
        <Typography>Recipe not found...</Typography>
      )}
      <SignInModal />
    </div>
  );
};

export default DetailedRecipe;
