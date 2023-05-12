import axios from 'axios';
import { UserData } from '../types';
import config from '../config';

const apiBaseUrl = config.apiBaseUrl;

export const userCall = async (token: string) => {
  console.log(apiBaseUrl);
  const response = await axios.get(`${apiBaseUrl}/users`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  return response.data;
};

export const getUserData = async (token: string): Promise<UserData> => {
  const response = await axios.get(`${apiBaseUrl}/users/user-data`, {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  });

  if (!response.data) throw new Error('Empty data');

  return response.data;
};

export const userSaveRecipe = async (token: string, id: number) => {
  const response = await axios.post(
    `${apiBaseUrl}/users/save-recipe`,
    { id },
    {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    }
  );

  return response.data;
};
