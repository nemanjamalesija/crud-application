import { createReducer } from '@reduxjs/toolkit';
import { initialState } from '../constants/initialState';
import { STORE_PERSON_INFO } from '../actions/personActions';

export const personReducer = createReducer(initialState, (builder) => {
  builder.addCase(STORE_PERSON_INFO, (state, action) => {
    const { payload } = action;
  });
});
