import { createAsyncThunk } from '@reduxjs/toolkit';
import { apiURL } from '../constants/apiURL';
import axios from 'axios';

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
