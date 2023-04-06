import { createReducer } from '@reduxjs/toolkit';
import { initialState } from '../constants/initialState';
import { ADD_NEW_PERSON, DELETE_PERSON, STORE_INITIAL_PEOPLE } from '../actions/peopleActions';

export const peopleReducer = createReducer(initialState, (builder) => {
  builder.addCase(STORE_INITIAL_PEOPLE, (state, action) => {
    const { payload: newPeopleAPI } = action;

    return { ...state, people: newPeopleAPI };
  });

  builder.addCase(ADD_NEW_PERSON, (state, action) => {
    const { payload: newPerson } = action;

    return { ...state, people: [...state.people, newPerson] };
  });

  builder.addCase(DELETE_PERSON, (state, action) => {
    const { payload: clickedPersonID } = action;

    const newPeople = state.people.filter((p) => p._id !== clickedPersonID);

    return { ...state, people: newPeople };
  });
});
