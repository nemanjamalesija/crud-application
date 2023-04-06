import { createAction } from '@reduxjs/toolkit';

export const STORE_PERSON_INFO = createAction('STORE_PERSON_INFO', (key: string, value: string | number) => {
  return {
    payload: { key, value },
  };
});

export type personActions = ReturnType<typeof STORE_PERSON_INFO>;
