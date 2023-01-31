import { useAppDispatch, useAppSelector } from '../../../hooks';
import Ingred from '../../common/Ingred';
import Box from '@mui/material/Box';
import { Button, styled } from '@mui/material';
import { toggleSelected } from '../../../reducers/ingredSlice';
import { IngredApi } from '../../../types';
import { deleteIngreds } from '../../../reducers/ingredSlice';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const IngredBox = styled(Box)(({ theme }) => ({
  background: 'transparent',
  padding: '10px',
  height: '100%',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',
  alignContent: 'flex-start',
  gap: '10px',
}));

type Props = {
  ingredients: IngredApi[];
};

const IngredList = ({ ingredients }: Props) => {
  const { allIngreds }: { allIngreds: IngredApi[] } = useAppSelector(
    (state) => state.ingredients
  );
  const dispatch = useAppDispatch();

  const selecetedIngreds = allIngreds.filter((ingred) => ingred.selected);

  const handleClick = (ingred: IngredApi): void => {
    dispatch(toggleSelected(ingred));
  };

  return (
    <IngredBox>
      {ingredients.map((ingred) => {
        return (
          <Ingred
            active={ingred.selected}
            ingred={ingred}
            key={ingred.id}
            handleClick={handleClick}
          />
        );
      })}
      {selecetedIngreds.length > 0 && (
        <div
          style={{
            alignSelf: 'flex-start',
            flexGrow: 1,
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <Button
            sx={{ padding: 0, margin: 0 }}
            onClick={() => dispatch(deleteIngreds())}
          >
            <DeleteOutlineIcon />
          </Button>
        </div>
      )}
    </IngredBox>
  );
};

export default IngredList;
