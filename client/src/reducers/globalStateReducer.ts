import { createSlice } from '@reduxjs/toolkit';
import { generalState } from '../states/generalState';

const globalStateSlice = createSlice({
  name: 'person',
  initialState: generalState,
  reducers: {
    stopLoading: (state) => {
      return { ...state, loading: false };
    },

    toggleForm: (state) => {
      return { ...state, showMainForm: !state.showMainForm };
    },
  },
});

export const globalStateReducer = globalStateSlice.reducer;
export const { stopLoading, toggleForm } = globalStateSlice.actions;
