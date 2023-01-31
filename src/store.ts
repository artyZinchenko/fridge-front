import { configureStore } from '@reduxjs/toolkit';
import ingredientReducer from './reducers/ingredSlice';
import recipesReducer from './reducers/recipeSlice';

const store = configureStore({
  reducer: {
    ingredients: ingredientReducer,
    recipes: recipesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
