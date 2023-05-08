import axios from 'axios';
import { ExtendedIngred, IngredApi, IngredientId, UserData } from '../types';
import errorHandler from './apiErrorHandler';

const apiBaseUrl = 'https://fridge-app-backend.onrender.com/api';

export const getPopularIngredients = async () => {
  const response = await axios.get(
    `${apiBaseUrl}/ingredients/popularIngredients`
  );

  return response.data;
};

export const userDeleteIngredient = async (
  token: string,
  ingredient: ExtendedIngred
) => {
  const response = await axios.post(
    `${apiBaseUrl}/users/delete-ingredient`,
    { ingredient },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );

  return response.data;
};

export const userSaveIngredients = async (
  token: string,
  ingredients: ExtendedIngred[]
) => {
  const response = await axios.post(
    `${apiBaseUrl}/users/save-ingredients`,
    { ingredients },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );

  return response.data;
};

export const savePantryIngredients = async (
  ingredients: IngredientId[],
  token: string
) => {
  const response = await axios.post(
    `${apiBaseUrl}/users/save-pantry-ingredients`,
    { ingredients },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );

  return response.data;
};

export const deletePantryIngredients = async (
  ingredients: IngredientId[],
  token: string
) => {
  const response = await axios.post(
    `${apiBaseUrl}/users/delete-pantry-ingredients`,
    { ingredients },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );

  return response.data;
};

export const ingredAutocomplete = async (letters: string) => {
  const response = await axios.post(`${apiBaseUrl}/ingredients/autocomplete`, {
    letters,
  });
  return response.data;
};
