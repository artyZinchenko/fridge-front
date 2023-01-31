import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IngredApi } from '../types';
import ingredsAPI from '../data/ingredsFormAPI';

export interface IngredState {
  allIngreds: IngredApi[];
}

const initialState: IngredState = {
  allIngreds: ingredsAPI,
};

const ingredSlice = createSlice({
  name: 'ingredient',
  initialState,
  reducers: {
    addToPantry(state, action: PayloadAction<IngredApi>) {
      state.allIngreds = state.allIngreds.map((el) => {
        return el.id === action.payload.id ? { ...el, inPantry: true } : el;
      });
    },
    addToCart(state, action: PayloadAction<IngredApi>) {
      state.allIngreds = state.allIngreds.map((el) => {
        return el.id === action.payload.id ? { ...el, inCart: true } : el;
      });
    },
    removeFromPantry(state, action: PayloadAction<IngredApi>) {
      state.allIngreds = state.allIngreds.map((el) => {
        return el.id === action.payload.id ? { ...el, inPantry: false } : el;
      });
    },
    removeFromCart(state, action: PayloadAction<IngredApi>) {
      state.allIngreds = state.allIngreds.map((el) => {
        return el.id === action.payload.id ? { ...el, inCart: false } : el;
      });
    },
    toggleSelected(state, action: PayloadAction<IngredApi>) {
      state.allIngreds = state.allIngreds.map((el) => {
        return el.id === action.payload.id
          ? { ...el, selected: !el.selected }
          : el;
      });
    },
    resetSelected(state) {
      state.allIngreds = state.allIngreds.map((el) => {
        return { ...el, selected: false };
      });
    },
    selectAll(state) {
      state.allIngreds = state.allIngreds.map((el) =>
        el.inPantry ? { ...el, selected: true } : el
      );
    },
    moveToCart(state) {
      state.allIngreds = state.allIngreds.map((el) => {
        return el.selected
          ? { ...el, inPantry: false, inCart: true, selected: false }
          : el;
      });
    },
    moveToPantry(state) {
      state.allIngreds = state.allIngreds.map((el) => {
        return el.selected
          ? { ...el, inPantry: true, inCart: false, selected: false }
          : el;
      });
    },
    deleteIngreds(state) {
      state.allIngreds = state.allIngreds.map((el) => {
        return el.selected
          ? { ...el, inPantry: false, inCart: false, selected: false }
          : el;
      });
    },
    addToStore(state, action) {
      state.allIngreds = [...state.allIngreds, action.payload];
    },
  },
});

export const {
  addToCart,
  addToPantry,
  removeFromCart,
  removeFromPantry,
  toggleSelected,
  deleteIngreds,
  moveToCart,
  moveToPantry,
  resetSelected,
  selectAll,
  addToStore,
} = ingredSlice.actions;

export default ingredSlice.reducer;
