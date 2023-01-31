import { text } from 'stream/consumers';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { addToPantry } from '../../../../reducers/ingredSlice';
import { IngredApi } from '../../../../types';
import { FlexStart, FlexVertical } from '../../../styles/Global';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Typography } from '@mui/material';

interface Props {
  text: string;
}

const FoundIngreds = ({ text }: Props) => {
  const dispatch = useAppDispatch();
  const { allIngreds } = useAppSelector((state) => state.ingredients);
  const foundIngreds = allIngreds.filter(
    (ingred) => ingred.name.includes(text.toLowerCase()) && !ingred.inPantry
  );
  const handleClick = (ingred: IngredApi) => {
    dispatch(addToPantry(ingred));
  };
  return (
    <FlexVertical sx={{ alignItems: 'flex-start', padding: 0 }}>
      {text.length > 0 &&
        foundIngreds.slice(0, 4).map((ingredient) => {
          return (
            <FlexStart key={ingredient.id} sx={{ padding: '0.2em 1em' }}>
              <AddCircleOutlineIcon
                onClick={() => handleClick(ingredient)}
                fontSize='inherit'
                color='primary'
              />
              <Typography variant='body2'>{ingredient.name}</Typography>
            </FlexStart>
          );
        })}
    </FlexVertical>
  );
};
export default FoundIngreds;
