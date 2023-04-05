import { createAction } from '@reduxjs/toolkit';
import { peopleType } from '../types/peopleTypes';

export const STORE_INITIAL_PEOPLE = createAction('STORE_INITIAL_PEOPLE', (people: peopleType) => {
  return {
    payload: people,
  };
});
