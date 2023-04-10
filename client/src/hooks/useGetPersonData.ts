import { useAppSelector } from './useAppSelector';

export const useGetPersonData = () => {
  const firstName = useAppSelector((state) => state.personReducer.firstName);
  const lastName = useAppSelector((state) => state.personReducer.lastName);
  const age = useAppSelector((state) => state.personReducer.age);
  const city = useAppSelector((state) => state.personReducer.city);
  const adress = useAppSelector((state) => state.personReducer.adress);
  const createdDate = useAppSelector((state) => state.personReducer.createdDate);

  return { firstName, lastName, age, city, adress, createdDate };
};
