export type personType = {
  _id: string;
  firstName: string;
  lastName: string;
  age: number;
  date: string;
  city: string;
  adress: string;
};

export type peopleType = personType[];

export type stateType = {
  people: peopleType;
};
