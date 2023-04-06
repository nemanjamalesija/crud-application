import { personType } from '../types/personType';

const person: personType = {
  _id: '',
  firstName: '',
  lastName: '',
  age: 0,
  city: '',
  adress: '',
  date: '',
};

export const initialState = {
  people: [person],
  currentPerson: person,
};
