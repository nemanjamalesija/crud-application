import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { apiURL } from '../constants/apiURL';

export const getAllPeople = createAsyncThunk(apiURL, async (_, { rejectWithValue }) => {
  try {
    const response = await axios(apiURL);
    const {
      data: {
        data: { people },
      },
    } = response;

    console.log(response);
    return people;
  } catch (error: any) {
    rejectWithValue(error.message);
  }
});
