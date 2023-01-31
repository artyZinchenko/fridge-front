import React from 'react';
import { useState, useRef, forwardRef } from 'react';
import {
  TextField,
  Box,
  Paper,
  Button,
  ClickAwayListener,
} from '@mui/material';
import { styled } from '@mui/system';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import Popper from '@mui/material/Popper';
import { Typography, InputAdornment } from '@mui/material';
import { FlexSpaceBetween, FlexVertical } from '../../../styles/Global';
import { addToPantry } from '../../../../reducers/ingredSlice';
import SearchIcon from '@mui/icons-material/Search';
import { CenterChildElement } from '../../../styles/Global';
import Ingred from '../../../common/Ingred';
import { IngredApi } from '../../../../types';
import { useTheme } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

const StyledTextField = styled(TextField)({
  backgroundColor: 'white',
  margin: '10px auto',
  borderRadius: '10px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '10px',
  },
});

interface Props {
  handleClose: () => void;
  text: string;
  setText: (arg0: string) => void;
}

const SelectIngreds = ({ handleClose, text, setText }: Props) => {
  return (
    <StyledTextField
      variant='standard'
      id='outlined-basic'
      placeholder='search ingredients'
      value={text}
      fullWidth
      sx={{ width: '90%' }}
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <SearchIcon fontSize='large' />
          </InputAdornment>
        ),
        endAdornment: (
          <InputAdornment position='end'>
            <HighlightOffIcon
              fontSize='small'
              onClick={() => {
                handleClose();
              }}
            />
          </InputAdornment>
        ),
      }}
      onChange={(e) => {
        setText(e.target.value);
      }}
    />
  );
};

export default SelectIngreds;
