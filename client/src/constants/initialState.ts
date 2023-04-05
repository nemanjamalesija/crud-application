import { stateType } from '../types/peopleTypes';

export const initialState: stateType = {
  people: [
    {
      _id: '',
      firstName: '',
      lastName: '',
      age: 0,
      date: new Date().toISOString(),
      city: '',
      adress: '',
    },
  ],
};
