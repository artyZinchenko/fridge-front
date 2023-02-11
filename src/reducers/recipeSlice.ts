import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Recipe } from '../types';

export interface RecipeState {
  apiRecipes: Recipe[];
  myRecipes: Recipe[];
  randomRecipes: Recipe[];
}

const initialState: RecipeState = {
  apiRecipes: [],
  myRecipes: [],
  randomRecipes: [],
};

const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    setRecipes(state, action: PayloadAction<Recipe[]>) {
      const excludeMatching = action.payload.filter(
        (recipe) => !state.apiRecipes.find((el) => el.id === recipe.id)
      );
      state.apiRecipes = [...state.apiRecipes, ...excludeMatching];
    },
    setRandomRecipes(state, action: PayloadAction<Recipe[]>) {
      state.randomRecipes = action.payload;
    },
  },
});

export const { setRecipes, setRandomRecipes } = recipeSlice.actions;

export default recipeSlice.reducer;
