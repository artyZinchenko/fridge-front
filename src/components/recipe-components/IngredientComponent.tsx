import { Typography } from '@mui/material';
import { ExtendedIngred } from '../../types';
import { round } from '../../utils/common';
import { FlexStart } from '../styles/Global';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { styled } from '@mui/material';
import { useState } from 'react';

interface StyledProps {
  clicked: boolean;
}

const StyledIcon = styled(AddCircleIcon, {
  shouldForwardProp: (prop) => prop !== 'clicked',
})<StyledProps>(({ theme, clicked }) => ({
  color: clicked ? theme.palette.grey[500] : theme.palette.primary.main,
}));

interface Props {
  ingredient: ExtendedIngred;
  metric: boolean;
  handleClick: (arg0: ExtendedIngred) => void;
}

const IngredientComponent = ({ ingredient, metric, handleClick }: Props) => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <FlexStart sx={{ paddingTop: '0.3em' }}>
      <StyledIcon
        fontSize='inherit'
        clicked={clicked}
        onClick={() => {
          setClicked(true);
          handleClick(ingredient);
        }}
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
