/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';
import { Outlet } from 'react-router-dom';
import { ExtendedIngred } from '../types';

interface ShopContextValue {
  ingredients: ExtendedIngred[];
  setIngredients: Dispatch<SetStateAction<ExtendedIngred[]>>;
}

const initialData = {
  ingredients: [],
  setIngredients: () => {},
};

const ShopContext = createContext<ShopContextValue>(initialData);

export const ShopContextProvider = () => {
  const [ingredients, setIngredients] = useState<ExtendedIngred[]>([]);

  // const { data, isError } = useQuery({
  //   queryKey: [],
  // });

  return (
    <ShopContext.Provider value={{ ingredients, setIngredients }}>
      <Outlet />
    </ShopContext.Provider>
  );
};

export const useShopContext = () => useContext(ShopContext);
