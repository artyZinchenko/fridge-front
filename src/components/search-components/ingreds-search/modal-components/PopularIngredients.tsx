import { useAppSelector } from '../../../../hooks';
import { IngredApi } from '../../../../types';
import { popularIngreds } from '../../../../data/popularIngreds';
import Ingred from '../../../common/Ingred';
import { useAppDispatch } from '../../../../hooks';
import { addToPantry } from '../../../../reducers/ingredSlice';
import { FlexStart } from '../../../styles/Global';
import { Box } from '@mui/material';

const PopularIngredients = () => {
  const dispatch = useAppDispatch();

  const { allIngreds }: { allIngreds: IngredApi[] } = useAppSelector(
    (state) => state.ingredients
  );
  const ingredients = allIngreds.filter(
    (el) =>
      popularIngreds.find(
        (ingred) => ingred.toLocaleLowerCase() === el.name.toLocaleLowerCase()
      ) && !el.inPantry
  );

  const handleClick = (ingred: IngredApi) => {
    dispatch(addToPantry(ingred));
  };

  return (
    <FlexStart
      sx={{
        overflow: 'scroll',
        padding: '1em',
      }}
    >
      {ingredients.map((ingred) => {
        return (
          <Ingred handleClick={handleClick} ingred={ingred} key={ingred.id} />
        );
      })}
    </FlexStart>
  );
};

export default PopularIngredients;
