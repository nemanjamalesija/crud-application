import { useAppSelector } from './hooks/useAppSelector';
import { useAppDispatch } from './hooks/useAppDispatch';
import { personType } from './types/personType';
import { useEffect } from 'react';
import { apiURL } from './constants/apiURL';
import Person from './components/Person';
import Form from './components/Form';
import EditForm from './components/EditForm';
import axios from 'axios';
import {
  editPersonInfo,
  finishEditing,
  storeInitialPeople,
} from './reducers/peopleReducer';
import { storePersonInfo } from './reducers/personReducer';

function App() {
  const { peopleSTATE, loading, currentPersonID } = useAppSelector(
    (state) => state.peopleReducer
  );
  const dispatch = useAppDispatch();

  const storeNewPersonHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    dispatch(storePersonInfo({ key, value }));
  };

  const editPropsHandler = (
    id: string | undefined,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!id) return;

    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    dispatch(editPersonInfo({ id, key, value }));
  };

  const finishEditingHandler = async (
    e: React.MouseEvent<HTMLButtonElement>,
    currentPersonObj: personType
  ) => {
    e.preventDefault();
    const { _id } = currentPersonObj;

    try {
      await axios.patch(`${apiURL}${_id}`, currentPersonObj);
    } catch (error) {
      console.log(error);
    }
    dispatch(finishEditing());
  };

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios(apiURL);
        const {
          data: {
            status,
            data: { people },
          },
        } = response;

        if (status === 'success') {
          dispatch(storeInitialPeople(people));
        }
      } catch (error) {
        console.log(error);
      }
    };

    getAllUsers();
  }, []);

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className='App'>
      <Form onChangeHandler={storeNewPersonHandler} />
      <div className='people-container'>
        {peopleSTATE.map((person) => {
          return currentPersonID === person._id ? (
            <EditForm
              {...person}
              key={person._id}
              onClickHandler={finishEditingHandler}
              onChangeHandler={editPropsHandler}
            />
          ) : (
            <Person key={person._id} {...person} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
