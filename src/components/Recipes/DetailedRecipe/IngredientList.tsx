import { Box, Button, Typography } from '@mui/material';
import { ExtendedIngred, IngredApi, UserData } from '../../../types';
import { FlexSpaceBetween, FlexStart } from '../../styles/Global';

import { useAppDispatch, useAppSelector } from '../../../hooks';
import { addToCart, addToStore } from '../../../reducers/ingredSlice';
import { toNewIngred } from '../../../utils/common';
import IngredientComponent from './IngredientComponent';
import { useEffect, useState } from 'react';

interface Props {
  ingredients: ExtendedIngred[];
  metric: boolean;
  data: UserData | undefined;
}

const IngredientList = ({ ingredients, metric, data }: Props) => {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (!data) setDisabled(true);
  }, [data]);

  return (
    <Box sx={{ paddingLeft: '1em' }}>
      {ingredients.map((el) => {
        return (
          <IngredientComponent
            ingredient={el}
            metric={metric}
            key={el.id}
            disabled={disabled}
          />
        );
      })}
    </Box>
  );
};
export default IngredientList;
