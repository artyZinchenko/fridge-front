import { async } from '@firebase/util';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useModalContext } from '../../../context/ModalContext';
import { getRecipesByTitle } from '../../../services/recipeServices';
import { AutocompleteResult } from '../../../types';

interface Props {
  item: AutocompleteResult;
  handleClick: (item: AutocompleteResult) => void;
}

const LinkToRecipe = ({ item, handleClick }: Props) => {
  return (
    <Typography
      variant='body2'
      className='link pointer'
      onClick={() => handleClick(item)}
    >
      {item.title}
    </Typography>
  );
};
export default LinkToRecipe;
