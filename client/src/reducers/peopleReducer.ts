import { createReducer } from '@reduxjs/toolkit';
import { initialState } from '../constants/initialState';
import { ADD_NEW_PERSON, STORE_INITIAL_PEOPLE } from '../actions/peopleActions';

export const peopleReducer = createReducer(initialState, (builder) => {
  builder.addCase(STORE_INITIAL_PEOPLE, (state, action) => {
    const { payload } = action;

    return { ...state, people: payload };
  });

  builder.addCase(ADD_NEW_PERSON, (state, action) => {
    const { payload } = action;

    return { ...state, people: [...state.people, payload] };
  });
});
