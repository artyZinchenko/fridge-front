import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hooks';
import IngredList from './IngredList';
import { FlexSpaceBetween, FlexVertical } from '../../styles/Global';
import { resetSelected, selectAll } from '../../../reducers/ingredSlice';
import { getRecipesByIngredients } from '../../../services/recipeServices';
import { IngredApi, Recipe } from '../../../types';
import { setRecipes } from '../../../reducers/recipeSlice';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import IngredientSelect from './modal-components/SelectIngreds';
import IngredModal from './modal-components/ModalIngreds';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const IngredsContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: '1em',
  padding: '0.5em',
}));

const IngredSearch = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { allIngreds }: { allIngreds: IngredApi[] } = useAppSelector(
    (state) => state.ingredients
  );
  const ingredients = allIngreds.filter((el) => el.inPantry);
  const getRecibesDisabled = !ingredients.find((el) => el.selected);

  const handleSelect = () => {
    dispatch(selectAll());
  };

  const handleGetRecipes = async () => {
    try {
      const ingredsForReq = ingredients.filter((el) => el.selected);
      const ingredString = ingredsForReq.map((el) => el.name).join(',+');
      const { data }: { data: Recipe[] } = await getRecipesByIngredients(
        ingredString
      );
      dispatch(setRecipes(data));
      dispatch(resetSelected());
      navigate('/recipes');
    } catch (err: unknown) {
      let errorMessage = 'Something went wrong.';
      if (err instanceof Error) {
        errorMessage += 'Error: ' + err.message;
        console.log(errorMessage);
      }
    }
  };

  useEffect(() => {
    console.log('effect');
    dispatch(resetSelected());
  }, [dispatch]);

  return (
    <FlexVertical>
      <IngredModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <Button variant='outlined' onClick={() => setModalOpen(true)}>
        <FlexSpaceBetween sx={{ gap: '0.5em' }}>
          <AddCircleIcon fontSize='inherit' />
          Add your ingredients
        </FlexSpaceBetween>
      </Button>
      <IngredsContainer>
        <IngredList ingredients={ingredients} />
      </IngredsContainer>
      <FlexSpaceBetween>
        <Button variant='outlined' onClick={handleSelect}>
          Select all
        </Button>
        <Button
          variant='contained'
          disabled={getRecibesDisabled}
          onClick={handleGetRecipes}
        >
          Get recipes
        </Button>
      </FlexSpaceBetween>
    </FlexVertical>
  );
};

export default IngredSearch;
