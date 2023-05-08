import axios from 'axios';
import { AutocompleteResult, Item, Recipe } from '../types';
import errorHandler from './apiErrorHandler';

const apiBaseUrl = 'https://fridge-app-backend.onrender.com/api';

export const getRecipesBySearch = async (
  searchOptionsObj: object
): Promise<Recipe[]> => {
  const response = await axios.post(`${apiBaseUrl}/recipes/complexSearch`, {
    options: searchOptionsObj,
  });

  return response.data;
};

export const getRecipesByIngredients = async (
  ingredNameString: string | null
): Promise<Recipe[]> => {
  if (!ingredNameString) throw new Error(`Ingredients are missing`);
  const response = await axios.post(`${apiBaseUrl}/recipes/byIngredients`, {
    ingredNameString,
  });

  return response.data;
};

export const getBestRecipes = async (): Promise<Recipe[]> => {
  const response = await axios.get(`${apiBaseUrl}/recipes/randomRecipes`);

  return response.data;
};

export const getRecipesByTitle = async (item: Item): Promise<Recipe[]> => {
  const response = await axios.post(`${apiBaseUrl}/recipes/byTitle`, { item });

  return response.data;
};

export const getRecipesById = async (ids: number[]): Promise<Recipe[]> => {
  const response = await axios.post(`${apiBaseUrl}/recipes/byIds`, { ids });

  return response.data;
};

export const autocomplete = async (
  letters: string
): Promise<AutocompleteResult[]> => {
  if (letters.length < 1) return [];

  const response = await axios.post(`${apiBaseUrl}/recipes/autocomplete`, {
    letters,
  });

  return response.data;
};
