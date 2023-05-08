/* eslint-disable @typescript-eslint/no-empty-function */
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useUserDataQuery } from '../components/hooks/queries/useUserDataQuery';
import { IngredientId } from '../types';
import { UserAuth } from './AuthContext';

interface PantryIngredientsContext {
  pantryIngredients: IngredientId[];
  setPantryIngredients: Dispatch<SetStateAction<IngredientId[]>>;
  addToPantry: (ingredient: IngredientId) => void;
}

const initialData = {
  pantryIngredients: [],
  setPantryIngredients: () => {},
  addToPantry: () => {},
};

const PantryIngredientsContext =
  createContext<PantryIngredientsContext>(initialData);

interface Props {
  children: React.ReactNode;
}

export const PantryIngredientsContextProvider = ({ children }: Props) => {
  const [pantryIngredients, setPantryIngredients] = useState<IngredientId[]>(
    []
  );

  const { token } = UserAuth();

  const { data } = useUserDataQuery();

  const addToPantry = (ingredient: IngredientId) => {
    const ingredientFound = pantryIngredients.find(
      (el) => el.id === ingredient.id
    );
    if (!ingredientFound) {
      setPantryIngredients([...pantryIngredients, ingredient]);
    }
  };

  useEffect(() => {
    if (data?.pantryIngredients) {
      setPantryIngredients(data.pantryIngredients);
    }
  }, [token, data]);

  return (
    <PantryIngredientsContext.Provider
      value={{ pantryIngredients, setPantryIngredients, addToPantry }}
    >
      {children}
    </PantryIngredientsContext.Provider>
  );
};

export const usePantryIngredientsContext = () =>
  useContext(PantryIngredientsContext);
