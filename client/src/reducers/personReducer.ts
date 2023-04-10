import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { person } from '../states/personState';
import { Draft } from '@reduxjs/toolkit';
import produce from 'immer';

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

      return produce(state, (draft: Draft<{ [key: string]: string | number }>) => {
        draft[key] = value;
      });
    },

    resetPersonState: (state) => {
      state = {
        firstName: '',
        lastName: '',
        age: 18,
        city: '',
        adress: '',
        createdDate: '',
      };
    },
  },
});

export const personReducer = personSlice.reducer;
export const { storePersonInfo, resetPersonState } = personSlice.actions;
