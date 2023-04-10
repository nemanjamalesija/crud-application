import { useAppDispatch } from '../hooks/useAppDispatch';
import { useAppSelector } from '../hooks/useAppSelector';
import { useGetPeopleData } from '../hooks/useGetPeople';
import { toggleForm } from '../reducers/globalStateReducer';
import EditForm from './EditForm';
import Person from './Person';

const People = () => {
  const { peopleSTATE, currentPersonID } = useGetPeopleData();
  const { showMainForm } = useAppSelector((state) => state.globalStateReducer);
  const { loading, error } = useGetPeopleData();
  const dispatch = useAppDispatch();

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>`Sorry, there has been an error: ${error}`</h1>;

  return (
    <div className='people-container'>
      {peopleSTATE.map((person) => {
        return currentPersonID === person._id ? (
          <EditForm key={person._id} {...person} />
        ) : (
          <Person key={person._id} {...person} />
        );
      })}
      <div
        className={`${showMainForm ? 'overlay' : 'overlay hidden'}`}
        onClick={() => dispatch(toggleForm())}
      ></div>
    </div>
  );
};

export default People;
