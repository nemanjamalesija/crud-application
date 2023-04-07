import { peopleReducer } from '../reducers/peopleReducer';
import { personReducer } from '../reducers/personReducer';
import { generalStateReducer } from '../reducers/generalStateReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    generalStateReducer,
    peopleReducer,
    personReducer,
  },
});

export default store;
