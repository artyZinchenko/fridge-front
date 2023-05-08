import { Backdrop, InputAdornment, styled, TextField } from '@mui/material';
import {
  Dispatch,
  memo,
  SetStateAction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { autocomplete } from '../../../services/recipeServices';
import { AutocompleteResult } from '../../../types';
import SearchIcon from '@mui/icons-material/Search';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import debounce from 'lodash.debounce';
import '../styles.css';
import { debounceWithChangeEvent } from '../../../utils/debounce';

const StyledTextField = styled(TextField)({
  backgroundColor: 'inherit',
  margin: '10px auto',
  borderRadius: '10px',
  '& .MuiOutlinedInput-notchedOutline': {
    borderRadius: '10px',
  },
});

interface Props {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
  setAutocomplete: Dispatch<SetStateAction<AutocompleteResult[]>>;
  onKeyPress: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}

const MyInput = ({ text, setText, setAutocomplete, onKeyPress }: Props) => {
  const fetchData = async (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const letters = e.target.value;
    const autocompleteResults = await autocomplete(letters);
    setAutocomplete(autocompleteResults);
  };

  const debounceHandler = debounceWithChangeEvent(fetchData, 300);

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { value } = e.target;
    setText(value);
    value.length > 0 && debounceHandler(e);
  };

  return (
    <div className='content-component'>
      <StyledTextField
        autoComplete='off'
        variant='standard'
        id='outlined-basic'
        placeholder='Thousands of recipes...'
        value={text}
        fullWidth
        onChange={(e) => {
          handleChange(e);
        }}
        onKeyUp={onKeyPress}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position='end'>
              {text && (
                <HighlightOffIcon
                  fontSize='small'
                  onClick={() => {
                    setText('');
                    setAutocomplete([]);
                  }}
                  sx={{ cursor: 'pointer' }}
                />
              )}
            </InputAdornment>
          ),
        }}
      />
    </div>
  );
};

export default MyInput;
