import { createAction } from '@reduxjs/toolkit';

export const STORE_PERSON_INFO = createAction(
  'STORE_PERSON_INFO',
  (objectKey: string, objectValue: string | number) => {
    return {
      payload: { objectKey, objectValue },
    };
  }
);

export type personActions = ReturnType<typeof STORE_PERSON_INFO>;
