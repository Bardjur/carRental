import { createSlice } from '@reduxjs/toolkit';
import { fetchBrand } from './operation';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Loading } from 'notiflix/build/notiflix-loading-aio';

const initialState = {
  brand: [],
  filter: {
    brand: '',
    price: '',
    from: '',
    to: '',
  },
};

const handlePending = () => {
  Loading.standard({ svgColor: '#3470FF' });
};

const handleReject = (state, { payload }) => {
  state.error = payload;
  Notify.failure(payload);
  Loading.remove();
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    clearFilter: state => {
      state.filter = initialState.filter;
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchBrand.pending, handlePending);
    builder.addCase(fetchBrand.fulfilled, (state, { payload }) => {
      state.brand = payload;
      Loading.remove();
    });
    builder.addCase(fetchBrand.rejected, handleReject);
  },
});

export const { setFilter, clearFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
