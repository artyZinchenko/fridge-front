import React from 'react';
import { useState, useRef, forwardRef } from 'react';
import {
  TextField,
  Box,
  Paper,
  Button,
  ClickAwayListener,
  InputAdornment,
} from '@mui/material';
import { useTheme } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { useModalContext } from '../../context/ModalContext';
import SearchIcon from '@mui/icons-material/Search';
import RecipeSearchModal from './ModalSearch';
import { styled } from '@mui/material';

const StyledButtonTextField = styled(TextField)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  pointerEvents: 'auto',
  borderRadius: '3rem',
  minWidth: '15em',
  '& :hover': {
    cursor: 'pointer',
  },
  '& .css-160ccqb-MuiFormControl-root-MuiTextField-root': {
    width: '15em',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '3rem',
  },
  '& .css-1o9s3wi-MuiInputBase-input-MuiOutlinedInput-input.Mui-disabled': {
    '-webkit-text-fill-color': theme.palette.text.primary,
  },
}));

const ButtonTextField = () => {
  const { setRecipeSeacrhOpen } = useModalContext();
  const handleClick = () => {
    setRecipeSeacrhOpen(true);
  };

  return (
    <StyledButtonTextField
      onClick={handleClick}
      disabled
      placeholder='Search thousands of recipes...'
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon />
          </InputAdornment>
        ),
      }}
      sx={{ width: '17em' }}
    />
  );
};

export default ButtonTextField;
