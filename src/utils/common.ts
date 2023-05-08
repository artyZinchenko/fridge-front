import { useAppDispatch, useAppSelector } from '../hooks';
import { addToStore } from '../reducers/ingredSlice';
import { ExtendedIngred, IngredApi } from '../types';

export const shortenString = (text: string, limit: number): string => {
  if (text.length <= limit) return text;
  return text.slice(0, limit).concat('...');
};

export const toNewIngred = (ingred: ExtendedIngred): IngredApi | undefined => {
  const dispatch = useAppDispatch();
  const formattedIngred: IngredApi = {
    name: ingred.name,
    id: ingred.id,
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
