import { peopleType } from './peopleTypes';
import { personType } from './personType';

export type formType = {
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type editFormType = personType & {
  onClickHandler: (e: React.MouseEvent<HTMLButtonElement>, ...args: personType[]) => void;
  onChangeHandler: (id: string | undefined, e: React.ChangeEvent<HTMLInputElement>) => void;
};
