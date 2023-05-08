import { useAppSelector } from '../../../../hooks';
import { IngredApi, IngredientId } from '../../../../types';
import { popularIngreds } from '../../../../data/popularIngreds';
import Ingred from '../../../common/Ingred';
import { useAppDispatch } from '../../../../hooks';
import { addToPantry } from '../../../../reducers/ingredSlice';
import { FlexStart } from '../../../styles/Global';
import { Box } from '@mui/material';
import { useUserDataQuery } from '../../../hooks/queries/useUserDataQuery';
import { useQuery } from '@tanstack/react-query';
import {
  getPopularIngredients,
  savePantryIngredients,
} from '../../../../services/ingredientService';
import { UserAuth } from '../../../../context/AuthContext';
import { usePantryIngredientsContext } from '../../../../context/PantryIngredientsContext';
import { useState } from 'react';

interface Props {
  setAnnouncement: React.Dispatch<React.SetStateAction<IngredientId | null>>;
}

const PopularIngredients = ({ setAnnouncement }: Props) => {
  const [ingredientsList, setIngredientsList] = useState<IngredientId[]>([]);
  const { user, token } = UserAuth();
  const { pantryIngredients, setPantryIngredients, addToPantry } =
    usePantryIngredientsContext();

  const { data, isError, isLoading } = useQuery<IngredientId[]>({
    queryKey: ['popularIngredients'],
    queryFn: async () => {
      const data: IngredientId[] = await getPopularIngredients();
      const filteredData = data.filter(
        (el) => !pantryIngredients.some((ingred) => el.id === ingred.id)
      );
      setIngredientsList(filteredData);
      return data;
    },
  });

  const handleClick = async (ingred: IngredientId) => {
    addToPantry(ingred);
    setAnnouncement(ingred);
    setIngredientsList(
      ingredientsList.filter((el) => {
        return el.id !== ingred.id;
      })
    );
    if (user) {
      await savePantryIngredients([ingred], token);
    }
  };

  return (
    <FlexStart
      sx={{
        overflow: 'auto',
        padding: '1em',
      }}
    >
      {ingredientsList.length > 0 &&
        ingredientsList.map((ingred) => {
          return (
            <Ingred
              ingred={ingred}
              key={ingred.id}
              expanded={false}
              handleClick={() => handleClick(ingred)}
            />
          );
        })}
    </FlexStart>
  );
};

export default PopularIngredients;
