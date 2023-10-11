import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchFavoritesCars } from './operation';
import { constants } from './constants';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const initialState = {
  cars: [],
  favorite: [],
  brand: [],
  isLastPage: false,
  isLoading: false,
  error: null,
};

const handlePending = () => {
  Loading.standard({ svgColor: '#3470FF' });
};

const handleReject = (state, { payload }) => {
  state.error = payload;
  Notify.failure(payload);
  Loading.remove();
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchCars.pending, handlePending);
    builder.addCase(fetchCars.fulfilled, (state, { payload }) => {
      state.isLastPage = payload.cars.length < constants.limit;

      if (payload.page > 1) {
        state.cars = [...state.cars, ...payload.cars];
      } else {
        state.cars = payload.cars;
      }
      Loading.remove();
    });
    builder.addCase(fetchCars.rejected, handleReject);

    builder.addCase(fetchFavoritesCars.pending, handlePending);
    builder.addCase(fetchFavoritesCars.fulfilled, (state, { payload }) => {
      state.favorite = payload;
      Loading.remove();
    });
    builder.addCase(fetchFavoritesCars.rejected, handleReject);
  },
});

export const carsReducer = carsSlice.reducer;
