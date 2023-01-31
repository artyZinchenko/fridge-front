import { Typography } from '@mui/material';
import { IngredApi } from '../../types';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { FlexSpaceBetween } from '../styles/Global';

interface StyledProps {
  selected: boolean;
}

const IngredsButton = styled(Box)<StyledProps>(({ theme, selected }) => ({
  display: 'inline',
  borderRadius: '20px',
  color: theme.palette.primary.main,
  border: '2px',
  backgroundColor: selected
    ? theme.palette.primary.light
    : theme.palette.background.paper,
  boxShadow: '1px 1px 3px 1px #888888',
  p: {
    color: theme.palette.text.primary,
    display: 'inline',
    fontSize: 'inherit',
    padding: '0px 10px',
  },
}));

export interface IngredProps {
  active?: boolean;
  ingred: IngredApi;
  handleClick: (ingred: IngredApi) => void;
}

const Ingred = ({ ingred, handleClick }: IngredProps) => {
  return (
    <IngredsButton
      onClick={() => handleClick(ingred)}
      selected={ingred.selected}
    >
      <FlexSpaceBetween>
        {ingred.image && (
          <div className='ingredImage'>
            <img
              src={`https://spoonacular.com/cdn/ingredients_100x100/${ingred.image}`}
            />
          </div>
        )}
        <Typography variant='body2'>{ingred.name}</Typography>
      </FlexSpaceBetween>
    </IngredsButton>
  );
};

export default Ingred;
