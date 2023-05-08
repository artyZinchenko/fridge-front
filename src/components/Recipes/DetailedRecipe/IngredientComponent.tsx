import { Typography } from '@mui/material';
import { ExtendedIngred } from '../../../types';
import { round } from '../../../utils/common';
import { FlexStart } from '../../styles/Global';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { styled } from '@mui/material';
import { useState } from 'react';
import { userSaveIngredients } from '../../../services/ingredientService';
import { UserAuth } from '../../../context/AuthContext';
import { useShopContext } from '../../../context/ShopContext';

interface StyledProps {
  saved: boolean;
}

const StyledIcon = styled(AddCircleIcon, {
  shouldForwardProp: (prop) => prop !== 'saved',
})<StyledProps>(({ theme, saved }) => ({
  color: saved ? theme.palette.grey[500] : theme.palette.primary.main,
}));

interface Props {
  ingredient: ExtendedIngred;
  metric: boolean;
  disabled: boolean;
}

const IngredientComponent = ({ ingredient, metric, disabled }: Props) => {
  const { token } = UserAuth();
  // const [saved, setSaved] = useState<boolean>(false);
  const { ingredients, setIngredients } = useShopContext();

  const saved = ingredients.find((el) => el === ingredient)
    ? true
    : disabled
    ? true
    : false;

  return (
    <FlexStart sx={{ paddingTop: '0.3em' }}>
      <StyledIcon
        fontSize='inherit'
        saved={saved}
        onClick={async () => {
          if (saved) return;
          const response = await userSaveIngredients(token, [ingredient]);

          if (response) setIngredients([...ingredients, ingredient]);
        }}
        className='pointer'
      />
      <FlexStart sx={{ alignItems: 'baseline' }}>
        <Typography variant='body1'>
          {metric
            ? round(ingredient.measures.metric.amount)
            : round(ingredient.measures.us.amount)}
        </Typography>
        <Typography variant='body2'>
          {metric
            ? ingredient.measures.metric.unitLong
            : ingredient.measures.us.unitLong}
        </Typography>
        <Typography variant='subtitle1'>{ingredient.name}</Typography>
      </FlexStart>
    </FlexStart>
  );
};
export default IngredientComponent;
