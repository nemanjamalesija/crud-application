import { createReducer } from '@reduxjs/toolkit';
import { STORE_PERSON_INFO } from '../actions/personActions';
import { person } from '../states/personState';

export const personReducer = createReducer(person, (builder) => {
  builder.addCase(STORE_PERSON_INFO, (state, action) => {
    const { payload } = action;

    const { key, value } = payload;

    return { ...state, [key]: value };
  });
});
