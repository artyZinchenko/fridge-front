import {
  getRecipesByIngredients,
  getRecipesBySearch,
  getRecipesByTitle,
} from '../services/recipeServices';
import { Recipe } from '../types';

interface MyObject {
  [key: string]: (arg0: any) => Promise<Recipe[]>;
}

export const fetchFunctions: MyObject = {
  ingreds: getRecipesByIngredients,
  type: getRecipesBySearch,
  query: getRecipesByTitle,
};
