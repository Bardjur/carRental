import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { constants } from './constants';

axios.defaults.baseURL = 'https://652253fcf43b1793841463ff.mockapi.io/';

export const fetchCars = createAsyncThunk(
  'cars/fetchCars',
  async (paramData, { rejectWithValue }) => {
    const params = {
      limit: constants.limit,
      page: 1,
      ...paramData,
    };

    try {
      const res = await axios.get('/adverts', { params });
      return { page: params.page, cars: res.data };
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);

export const fetchFavoritesCars = createAsyncThunk(
  'cars/fetchFavoritesCars',
  async (favorite, { rejectWithValue }) => {
    if (!favorite) {
      return [];
    }
    const params = {
      id: favorite,
    };

    try {
      const res = await axios.get('/adverts', { params });
      return res.data;
    } catch (err) {
      console.log(err);
      return rejectWithValue(err.message);
    }
  }
);
