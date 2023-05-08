import { Box, Button, Typography } from '@mui/material';
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
  const navigate = useNavigate();
  const searchOptionsObj = { mealType, dietType, cuisineType };

  const handleGetRecipes = async () => {
    navigate('/recipes?q=type', { state: searchOptionsObj });
  };

  return (
    <FlexVertical className='py'>
      <div className='px gap py'>
        <Typography variant='h4'>Use search filter</Typography>
        <Typography variant='subtitle1'>
          {' '}
          Use our filters to find the perfect recipe that fits your meal type,
          cuisine type, and dietary restrictions. Discover new and delicious
          meals that meet your specific needs and preferences. Try our recipe
          search service today and elevate your cooking game.{' '}
        </Typography>
      </div>
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
