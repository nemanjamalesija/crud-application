import { createReducer } from '@reduxjs/toolkit';
import { STORE_INITIAL_PEOPLE } from '../actions/actions';
import { initialState } from '../constants/initialState';

export const peopleReducer = createReducer(initialState, (builder) => {
  builder.addCase(STORE_INITIAL_PEOPLE, (state, action) => {
    const { payload } = action;

    return { ...state, people: payload };
  });
});
