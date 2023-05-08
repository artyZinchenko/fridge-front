import { text } from 'stream/consumers';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { addToPantry } from '../../../../reducers/ingredSlice';
import { IngredApi, IngredientId } from '../../../../types';
import { FlexStart, FlexVertical } from '../../../styles/Global';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import {
  ingredAutocomplete,
  savePantryIngredients,
} from '../../../../services/ingredientService';
import { debounceWithChangeEvent } from '../../../../utils/debounce';
import { useDebounce } from '../../../hooks/useDebounce';
import { usePantryIngredientsContext } from '../../../../context/PantryIngredientsContext';
import { useState } from 'react';
import { UserAuth } from '../../../../context/AuthContext';

interface Props {
  text: string;
  setAnnouncement: React.Dispatch<React.SetStateAction<IngredientId | null>>;
}

const FoundIngreds = ({ text, setAnnouncement }: Props) => {
  const [ingredientList, setIngredientList] = useState<IngredientId[]>([]);

  const { pantryIngredients, setPantryIngredients, addToPantry } =
    usePantryIngredientsContext();
  const { user, token } = UserAuth();

  const { data, isError, isLoading } = useQuery<IngredientId[]>({
    queryKey: ['search-ingredients', text],
    queryFn: async () => {
      const data = await ingredAutocomplete(text);
      setIngredientList(data);
      return data;
    },
    // staleTime: 60 * 1000 * 5,
  });

  if (text.length < 1) return null;

  if (isLoading) {
    return <div>Loading ingredients...</div>;
  }

  if (isError) {
    return <div>Failed to load ingredients</div>;
  }

  const handleClick = async (ingredient: IngredientId) => {
    setAnnouncement(ingredient);
    addToPantry(ingredient);
    setIngredientList(
      ingredientList.filter((el) => {
        return el.id !== ingredient.id;
      })
    );
    if (user) {
      await savePantryIngredients([ingredient], token);
    }
  };

  const filteredList = ingredientList.filter((el) => {
    return !pantryIngredients.some((ingred) => ingred.id === el.id);
  });

  return (
    <FlexVertical sx={{ alignItems: 'flex-start', padding: 0 }}>
      {text.length > 0 &&
        filteredList.slice(0, 4).map((ingredient) => {
          return (
            <div className='pointer' key={ingredient.id}>
              <FlexStart
                sx={{ padding: '0.2em 1em' }}
                onClick={() => handleClick(ingredient)}
              >
                <AddCircleOutlineIcon fontSize='inherit' color='primary' />
                <Typography variant='body2'>{ingredient.name}</Typography>
              </FlexStart>
            </div>
          );
        })}
    </FlexVertical>
  );
};

export default FoundIngreds;
