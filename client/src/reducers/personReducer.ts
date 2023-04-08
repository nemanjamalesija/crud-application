import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { person } from '../states/personState';

const personSlice = createSlice({
  name: 'person',
  initialState: person,
  reducers: {
    storePersonInfo: (
      state,
      action: PayloadAction<{ key: string; value: string | number }>
    ) => {
      const { payload } = action;

      const { key, value } = payload;

      return { ...state, [key]: value };
    },
  },
});

export const personReducer = personSlice.reducer;
export const { storePersonInfo } = personSlice.actions;
