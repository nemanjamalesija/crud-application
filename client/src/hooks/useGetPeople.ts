import { useAppSelector } from './useAppSelector';

export const useGetPeople = () => {
  const peopleSTATE = useAppSelector((state) => state.peopleReducer.peopleSTATE);
  const currentPersonID = useAppSelector((state) => state.peopleReducer.currentPersonID);
  const loading = useAppSelector((state) => state.peopleReducer.loading);
  const error = useAppSelector((state) => state.peopleReducer.error);

  return { peopleSTATE, loading, error, currentPersonID };
};
