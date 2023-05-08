import { Box, Button, Typography } from '@mui/material';
import { useState } from 'react';
import IngredList from './IngredList';
import { FlexEnd, FlexSpaceBetween, FlexVertical } from '../../styles/Global';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import IngredModal from './modal-components/RootModal';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { usePantryIngredientsContext } from '../../../context/PantryIngredientsContext';

const IngredsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: '1em',
  padding: '0.5em',
  width: '80%',
  minHeight: '2em',
}));

const IngredSearch = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { pantryIngredients } = usePantryIngredientsContext();
  const navigate = useNavigate();

  // must recieve array of ingredients {name:, id:}
  const handleGetRecipes = () => {
    const ingredString = pantryIngredients.map((el) => el.name).join(',+');
    navigate('/recipes?q=ingreds', { state: ingredString });
  };

  return (
    <FlexVertical className='py'>
      <div className='px gap py'>
        <Typography variant='h4'>Search with your ingredients</Typography>
        <Typography variant='subtitle1'>
          {' '}
          Find delicious recipes with the ingredients you have! Our service
          helps you save time and money by suggesting meals that use ingredients
          in your fridge. Get new recipe ideas and reduce food waste.{' '}
        </Typography>
      </div>
      <IngredModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Button variant='outlined' onClick={() => setModalOpen(true)}>
        <FlexSpaceBetween sx={{ gap: '0.5em' }}>
          <AddCircleIcon fontSize='inherit' />
          Add your ingredients
        </FlexSpaceBetween>
      </Button>
      <IngredsContainer>
        {pantryIngredients.length > 0 ? (
          <IngredList />
        ) : (
          <Typography variant='subtitle2'>Your pantry is empty...</Typography>
        )}
      </IngredsContainer>
      <FlexEnd>
        <Button
          variant='contained'
          disabled={pantryIngredients.length < 1}
          onClick={handleGetRecipes}
        >
          Get recipes
        </Button>
      </FlexEnd>
    </FlexVertical>
  );
};

export default IngredSearch;
