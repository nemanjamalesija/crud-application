import { createSlice } from '@reduxjs/toolkit';
import { generalState } from '../states/generalState';

const globalStateSlice = createSlice({
  name: 'person',
  initialState: generalState,
  reducers: {
    toggleForm: (state) => {
      return { ...state, showMainForm: !state.showMainForm };
    },
  },
});

export const globalStateReducer = globalStateSlice.reducer;
export const { toggleForm } = globalStateSlice.actions;
