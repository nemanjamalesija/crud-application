import { createReducer } from '@reduxjs/toolkit';
import { generalState } from '../states/generalState';
import { STOP_LOADING } from '../actions/generalStateActions';

export const generalStateReducer = createReducer(generalState, (builder) => {
  builder.addCase(STOP_LOADING, (state, _) => {
    return { ...state, loading: false };
  });
});
