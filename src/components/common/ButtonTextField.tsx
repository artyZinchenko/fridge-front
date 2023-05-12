import { TextField, InputAdornment, useMediaQuery } from '@mui/material';
import { useModalContext } from '../../context/ModalContext';
import SearchIcon from '@mui/icons-material/Search';
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
  const matches = useMediaQuery('(min-width:40em)');
  const { setRecipeSeacrhOpen } = useModalContext();
  const handleClick = () => {
    setRecipeSeacrhOpen(true);
  };

  return (
    <StyledButtonTextField
      onClick={handleClick}
      disabled
      placeholder={
        matches ? 'Search thousands of recipes...' : 'Thousands of recipes...'
      }
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
