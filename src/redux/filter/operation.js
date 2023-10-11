import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://652253fcf43b1793841463ff.mockapi.io/';

export const fetchBrand = createAsyncThunk(
  'filter/fetchBrand',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get('/brand');
      return res.data;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);
