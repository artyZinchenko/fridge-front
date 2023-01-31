/* eslint-disable @typescript-eslint/no-var-requires */
import { Recipe } from '../../types';
import { Box, styled } from '@mui/material';
import { useState } from 'react';

const veganIcon = require('../../assets/vegan-icon.png');
const dairyIcon = require('../../assets/milk-free-icon.png');
const glutenIcon = require('../../assets/gluten-free-icon.png');

type Props = {
  recipe: Recipe;
};

interface FoodProp {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  type: any;
}

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  borderRadius: '1em',
}));

const FoodIcon = ({ type }: FoodProp) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
    setExpanded(!expanded);
  };

  return (
    <StyledBox onClick={(e) => handleClick(e)}>
      <img src={type} className={expanded ? 'expandedImage' : 'typeImage'} />
    </StyledBox>
  );
};

const FlexEnd = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '5px',
  height: '1.4em',
  position: 'absolute',
  padding: '0.2em',
  borderRadius: '1em',
  top: '0.2em',
  right: '0.2em',
  zIndex: 100,
  backgroundColor: theme.palette.background.default,
}));

const Icons = ({ recipe }: Props) => {
  return (
    <FlexEnd>
      {recipe.vegan && <FoodIcon type={veganIcon} />}
      {recipe.dairyFree && <FoodIcon type={dairyIcon} />}
      {recipe.glutenFree && <FoodIcon type={glutenIcon} />}
    </FlexEnd>
  );
};

export default Icons;
