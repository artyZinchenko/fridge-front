import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { FlexVertical } from '../../styles/Global';
import SearchBar from './SelectGroup';
import { getRecipesBySearch } from '../../../services/recipeServices';
import { Recipe } from '../../../types';
import { setRecipes } from '../../../reducers/recipeSlice';
import { useAppDispatch } from '../../../hooks';
import { useNavigate } from 'react-router-dom';

const TypeSearch = () => {
  const [mealType, setMealType] = useState<string>('');
  const [dietType, setDietType] = useState<string>('');
  const [cuisineType, setCuisineType] = useState<string>('');
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const searchOptionsObj = { mealType, dietType, cuisineType };

  const handleGetRecipes = async () => {
    try {
      const { data }: { data: Recipe[] } = await getRecipesBySearch(
        searchOptionsObj
      );
      dispatch(setRecipes(data));
      navigate('/recipes/recieved');
    } catch (err: unknown) {
      let errMessage = 'Something went wrong.';
      if (err instanceof Error) {
        errMessage += 'Error: ' + err.message;
      }
      console.log(errMessage);
    }
  };

  return (
    <FlexVertical>
      <Box sx={{ marginBlock: '1em' }}>
        <SearchBar
          mealType={mealType}
          setMealType={setMealType}
          dietType={dietType}
          setDietType={setDietType}
          cuisineType={cuisineType}
          setCuisineType={setCuisineType}
        />
      </Box>
      <Button variant='contained' onClick={handleGetRecipes}>
        Get recipes
      </Button>
    </FlexVertical>
  );
};

export default TypeSearch;
