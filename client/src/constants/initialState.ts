import { personType } from '../types/peopleTypes';
import { stateType } from '../types/stateType';

const person = {
  _id: '',
  firstName: '',
  lastName: '',
  age: 0,
  date: new Date().toISOString(),
  city: '',
  adress: '',
};

export const initialState: stateType = {
  people: [person],
  currentPerson: person,
};
