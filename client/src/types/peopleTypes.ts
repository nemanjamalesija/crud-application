import { personType } from './personType';

export type peopleType = {
  peopleSTATE: personType[];
  loading: boolean;
  currentPersonID: string | undefined;
  error?: any;
};
