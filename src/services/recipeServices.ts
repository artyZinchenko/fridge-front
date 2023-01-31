import axios from 'axios';

const apiBaseUrl = 'http://localhost:3001/api';

export const getRecipesBySearch = async (searchOptionsObj: object) => {
  const response = await axios.post(`${apiBaseUrl}/recipes/complexSearch`, {
    options: searchOptionsObj,
  });
  if (response instanceof Error) {
    throw new Error(`Something went wrong ${response.message});
    }`);
  }
  return response;
};

export const getRecipesByIngredients = async (
  ingredNameString: string | null
) => {
  if (!ingredNameString) throw new Error(`Ingredients are missing`);
  const response = await axios.post(`${apiBaseUrl}/recipes/byIngredients`, {
    ingredNameString,
  });
  if (response instanceof Error) {
    throw new Error(`Something went wrong ${response.message});
    }`);
  }
  return response;
};
