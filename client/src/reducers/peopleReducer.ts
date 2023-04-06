import { createReducer } from '@reduxjs/toolkit';
import { peopleState } from '../states/peopleState';
import { ADD_NEW_PERSON, DELETE_PERSON, STORE_INITIAL_PEOPLE } from '../actions/peopleActions';

export const peopleReducer = createReducer(peopleState, (builder) => {
  builder.addCase(STORE_INITIAL_PEOPLE, (state, action) => {
    const { payload: peopleAPI } = action;

    return { people: peopleAPI };
  });

  builder.addCase(ADD_NEW_PERSON, (state, action) => {
    const { payload: newPerson } = action;

    return { people: [...state.people, newPerson] };
  });

  builder.addCase(DELETE_PERSON, (state, action) => {
    const { payload: clickedPersonID } = action;

    const newPeople = state.people.filter((p) => p._id !== clickedPersonID);

    return { people: newPeople };
  });
});
