import { peopleReducer } from '../reducers/peopleReducer';
import { personReducer } from '../reducers/personReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    peopleReducer,
    personReducer,
  },
});

export default store;
