import React from 'react';
import { TextField } from '@mui/material';
import { styled } from '@mui/system';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
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

const SelectTextField = ({ handleClose, text, setText }: Props) => {
  return (
    <StyledTextField
      autoComplete='off'
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
              sx={{ cursor: 'pointer' }}
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

export default SelectTextField;
