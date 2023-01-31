import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Recipe } from '../types';

export interface RecipeState {
  apiRecipes: Recipe[];
  myRecipes: Recipe[];
}

const initialState: RecipeState = {
  apiRecipes: [],
  myRecipes: [],
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
  },
});

export const { setRecipes } = recipeSlice.actions;

export default recipeSlice.reducer;
