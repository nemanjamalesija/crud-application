import { createReducer } from '@reduxjs/toolkit';
import { people } from '../states/peopleState';
import { ADD_NEW_PERSON, DELETE_PERSON, STORE_INITIAL_PEOPLE } from '../actions/peopleActions';

export const peopleReducer = createReducer(people, (builder) => {
  builder.addCase(STORE_INITIAL_PEOPLE, (state, action) => {
    const { payload: peopleAPI } = action;

    return { ...state, peopleSTATE: peopleAPI, loading: false };
  });

  builder.addCase(ADD_NEW_PERSON, (state, action) => {
    const { payload: newPerson } = action;

    return { ...state, peopleSTATE: { ...state.peopleSTATE, newPerson } };
  });

  builder.addCase(DELETE_PERSON, (state, action) => {
    const { payload: clickedPersonID } = action;

    const newPeople = state.peopleSTATE.filter((p) => p._id !== clickedPersonID);

    return { ...state, peopleSTATE: newPeople };
  });
});
