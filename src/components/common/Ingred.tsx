import { Typography } from '@mui/material';
import { IngredApi, IngredientId } from '../../types';
import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { FlexSpaceBetween } from '../styles/Global';
import ClearIcon from '@mui/icons-material/Clear';

const IngredsButton = styled(Box)(({ theme }) => ({
  display: 'inline',
  borderRadius: '20px',
  color: theme.palette.primary.main,
  border: '2px',
  backgroundColor: theme.palette.background.paper,
  boxShadow: '1px 1px 3px 1px #888888',
  p: {
    color: theme.palette.text.primary,
    display: 'inline',
    fontSize: 'inherit',
    padding: '0px 10px',
  },
  cursor: 'pointer',
}));

export interface IngredProps {
  ingred: IngredientId;
  expanded: boolean;
  handleClick: (ingred: IngredientId) => Promise<void>;
}

const Ingred = ({ ingred, expanded, handleClick }: IngredProps) => {
  return (
    <IngredsButton onClick={() => handleClick(ingred)}>
      <FlexSpaceBetween>
        {/* {ingred.image && (
          <div className='ingredImage'>
            <img
              src={`https://spoonacular.com/cdn/ingredients_100x100/${ingred.image}`}
            />
          </div>
        )} */}
        <Typography variant='body2'>{ingred.name}</Typography>
        {expanded && <ClearIcon fontSize='small' color='disabled' />}
      </FlexSpaceBetween>
    </IngredsButton>
  );
};

export default Ingred;
