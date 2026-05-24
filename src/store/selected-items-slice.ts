import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { FilmItem } from './selected-items-slice.types';
import type { DataProps } from '../components/Result/Result.types';

const initialState: FilmItem = {
  items: [],
};

const selectedItemsSlice = createSlice({
  name: 'selectedItems',

  initialState,

  reducers: {
    toggleItem(state, action: PayloadAction<DataProps>) {
      const hasItem = state.items.some(
        (item) => item.url === action.payload.url,
      );

      if (!hasItem) {
        state.items.push(action.payload);
      } else {
        state.items = state.items.filter(
          (item) => item.url !== action.payload.url,
        );
      }
    },

    unSelectAll(state) {
      state.items = [];
    },
  },
});

export const selectedItemsActions = selectedItemsSlice.actions;

export default selectedItemsSlice.reducer;
