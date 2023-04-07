import { createAction } from '@reduxjs/toolkit';
import { personType } from '../types/personType';

const peopleActions = {
  STORE_INITIAL_PEOPLE: createAction('STORE_INITIAL_PEOPLE', (peopleAPI: personType[]) => {
    return {
      payload: peopleAPI,
    };
  }),
  ADD_NEW_PERSON: createAction('ADD_NEW_PERSON', (newPerson: personType) => {
    return {
      payload: newPerson,
    };
  }),
  DELETE_PERSON: createAction('DELETE_PERSON', (clickedPersonID: string) => {
    return { payload: clickedPersonID };
  }),

  EDIT_PERSON_INFO: createAction(
    'EDIT_PERSON_INFO',
    (clickedPersonID: string, name: string, value: string | number) => {
      return {
        payload: { clickedPersonID, name, value },
      };
    }
  ),
};

export const { STORE_INITIAL_PEOPLE, ADD_NEW_PERSON, DELETE_PERSON, EDIT_PERSON_INFO } = peopleActions;

export type peopleActions = ReturnType<typeof STORE_INITIAL_PEOPLE> | ReturnType<typeof ADD_NEW_PERSON>;
