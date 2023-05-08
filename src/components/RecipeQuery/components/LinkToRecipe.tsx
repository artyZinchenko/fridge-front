import { Typography } from '@mui/material';
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
