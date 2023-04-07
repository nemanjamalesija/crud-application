import { createAction } from '@reduxjs/toolkit';

const generalStateActions = {
  STOP_LOADING: createAction('STOP_LOADING'),
};

export const { STOP_LOADING } = generalStateActions;
