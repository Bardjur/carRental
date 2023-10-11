import { createSlice } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, { payload }) => {
      state.favorites.push(payload);
      Notify.success('added to favorites');
    },
    removeFavorite: (state, { payload }) => {
      state.favorites = state.favorites.filter(item => item !== payload);
      Notify.info('remove from favorites');
    },
  },
});

export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export const favoriteReducer = favoriteSlice.reducer;
