import { useAppDispatch, useAppSelector } from '../hooks';
import { addToStore } from '../reducers/ingredSlice';
import { ExtendedIngred, IngredApi } from '../types';

export const shortenUrl = (fullurl: string): string => {
  return fullurl.slice(0, 35).concat('', '...');
};

export const toNewIngred = (ingred: ExtendedIngred): IngredApi | undefined => {
  const dispatch = useAppDispatch();
  const formattedIngred: IngredApi = {
    name: ingred.name,
    id: ingred.id,
    amount: ingred.amount,
    measures: ingred.measures,
    aisle: ingred.aisle,
    inPantry: false,
    inCart: false,
    selected: false,
  };
  dispatch(addToStore(formattedIngred));
  return useAppSelector((state) =>
    state.ingredients.allIngreds.find((el) => el.id === ingred.id)
  );
};

export const round = (number: number) => {
  if (number % 1 !== 0 && number > 10) return Math.round(number / 10) * 10;
  return number;
};
