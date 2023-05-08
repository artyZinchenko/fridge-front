import { useAppDispatch, useAppSelector } from '../../../hooks';
import Ingred from '../../common/Ingred';
import Box from '@mui/material/Box';
import { Button, styled } from '@mui/material';
import { toggleSelected } from '../../../reducers/ingredSlice';
import { IngredApi, IngredientId } from '../../../types';
import { deleteIngreds } from '../../../reducers/ingredSlice';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { usePantryIngredientsContext } from '../../../context/PantryIngredientsContext';
import { UserAuth } from '../../../context/AuthContext';
import { deletePantryIngredients } from '../../../services/ingredientService';

const IngredBox = styled(Box)(({ theme }) => ({
  background: 'transparent',
  padding: '10px',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignContent: 'flex-start',
  gap: '10px',
}));

type Props = {
  ingredients: IngredientId[];
};

const IngredList = () => {
  const { user, token } = UserAuth();
  const { pantryIngredients, setPantryIngredients } =
    usePantryIngredientsContext();

  const handleClick = async (ingred: IngredientId) => {
    if (user) {
      deletePantryIngredients([ingred], token);
    }
    const newIngreds = pantryIngredients.filter((el) => el.id !== ingred.id);
    setPantryIngredients(newIngreds);
  };

  return (
    <IngredBox>
      {pantryIngredients.map((ingred) => {
        return (
          <Ingred
            ingred={ingred}
            key={ingred.id}
            expanded={true}
            handleClick={() => handleClick(ingred)}
          />
        );
      })}
      {pantryIngredients.length > 0 && (
        <div
          style={{
            alignSelf: 'flex-start',
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        ></div>
      )}
    </IngredBox>
  );
};

export default IngredList;
