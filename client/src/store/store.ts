import { peopleReducer } from '../reducers/peopleReducer';
import { personReducer } from '../reducers/personReducer';
import { globalStateReducer } from '../reducers/globalStateReducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    peopleReducer,
    personReducer,
    globalStateReducer,
  },
});

export default store;
