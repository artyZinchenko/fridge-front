import axios from 'axios';
import { Recipe } from '../types';

const apiBaseUrl = 'http://localhost:3001/api';

export const getRecipesBySearch = async (
  searchOptionsObj: object
): Promise<Recipe[]> => {
  const response = await axios.post(`${apiBaseUrl}/recipes/complexSearch`, {
    options: searchOptionsObj,
  });
  if (response instanceof Error) {
    throw new Error(`Something went wrong ${response.message});
    }`);
  }
  return response.data;
};

export const getRecipesByIngredients = async (
  ingredNameString: string | null
): Promise<Recipe[]> => {
  if (!ingredNameString) throw new Error(`Ingredients are missing`);
  const response = await axios.post(`${apiBaseUrl}/recipes/byIngredients`, {
    ingredNameString,
  });
  if (response instanceof Error) {
    throw new Error(`Something went wrong ${response.message});
    }`);
  }
  return response.data;
};

export const getBestRecipes = async (): Promise<Recipe[]> => {
  const response = await axios.get(`${apiBaseUrl}/recipes/randomRecipes`);
  if (response instanceof Error) {
    throw new Error(`Something went wrong ${response.message});
    }`);
  }
  return response.data;
};
