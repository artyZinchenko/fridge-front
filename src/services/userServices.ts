import axios from 'axios';
import { IngredApi, UserData } from '../types';
import errorHandler from './apiErrorHandler';

const apiBaseUrl = 'https://fridge-app-backend.onrender.com/api/users';

export const userCall = async (token: string) => {
  const response = await axios.get(`${apiBaseUrl}`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return response.data;
};

export const getUserData = async (token: string): Promise<UserData> => {
  const response = await axios.get(`${apiBaseUrl}/user-data`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  if (!response.data) throw new Error('Empty data');

  return response.data;
};

export const userSaveRecipe = async (token: string, id: number) => {
  const response = await axios.post(
    `${apiBaseUrl}/save-recipe`,
    { id },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );

  return response.data;
};
