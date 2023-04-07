export type personType = {
  _id: string;
  firstName: string;
  lastName: string;
  age: number;
  date?: string;
  city: string;
  adress: string;
};

type personHandlers = {
  onClickHandler: (id: string) => void;
};
