import { personType } from '../types/personType';

const person: personType = {
  firstName: '',
  lastName: '',
  age: 0,
  city: '',
  adress: '',
  date: '',
};

export const initialState = {
  people: [person],
  newPerson: person,
};
