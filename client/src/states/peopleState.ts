import { peopleType } from '../types/peopleTypes';
import { person } from './personState';

export const people: peopleType = {
  peopleSTATE: [person],
  loading: false,
  currentPersonID: undefined,
  error: '',
};
