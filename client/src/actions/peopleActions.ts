import { createAction } from '@reduxjs/toolkit';
import { peopleType } from '../types/peopleTypes';
import { personType } from '../types/personType';

export const STORE_INITIAL_PEOPLE = createAction('STORE_INITIAL_PEOPLE', (people: peopleType) => {
  return {
    payload: people,
  };
});

export const ADD_NEW_PERSON = createAction('ADD_NEW_PERSON', (newPerson: personType) => {
  return {
    payload: newPerson,
  };
});

export type peopleActions = ReturnType<typeof STORE_INITIAL_PEOPLE> | ReturnType<typeof ADD_NEW_PERSON>;
