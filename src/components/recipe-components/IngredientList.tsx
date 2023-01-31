import { Box, Button, Typography } from '@mui/material';
import { ExtendedIngred, IngredApi } from '../../types';
import { FlexSpaceBetween, FlexStart } from '../styles/Global';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { addToCart, addToStore } from '../../reducers/ingredSlice';
import ingredsAPI from '../../data/ingredsFormAPI';
import { toNewIngred } from '../../utils/common';
import IngredientComponent from './IngredientComponent';

interface Props {
  ingredients: ExtendedIngred[];
  metric: boolean;
}

const IngredientList = ({ ingredients, metric }: Props) => {
  const dispatch = useAppDispatch();
  const allIngreds: IngredApi[] = useAppSelector(
    (state) => state.ingredients.allIngreds
  );

  const handleClick = (ingred: ExtendedIngred) => {
    const foundIngred = allIngreds.find((el) => el.id === ingred.id);
    if (foundIngred) {
      dispatch(addToCart(foundIngred));
    } else {
      const newIngred = toNewIngred(ingred);
      newIngred ? dispatch(addToCart(newIngred)) : console.log('err');
    }
  };

  return (
    <Box sx={{ paddingLeft: '1em' }}>
      {ingredients.map((el) => {
        return (
          <IngredientComponent
            ingredient={el}
            metric={metric}
            handleClick={handleClick}
            key={el.id}
          />
        );
      })}
    </Box>
  );
};
export default IngredientList;
