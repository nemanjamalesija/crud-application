import { EDIT_PERSON_INFO, STORE_INITIAL_PEOPLE } from './actions/peopleActions';
import { STORE_PERSON_INFO } from './actions/personActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './types/rootState';
import { useEffect, useState } from 'react';
import { apiURL } from './constants/apiURL';
import Person from './components/Person';
import Form from './components/Form';
import EditForm from './components/EditForm';
import axios from 'axios';
import { personType } from './types/personType';

function App() {
  const { peopleSTATE, loading } = useSelector((state: RootState) => state.peopleReducer);
  const dispatch = useDispatch();
  const [editItemId, setEditPersonID] = useState('');

  const storeNewPersonHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    dispatch(STORE_PERSON_INFO(key, value));
  };

  const setEditPersonIDHandler = (id: string) => {
    setEditPersonID(id);
  };

  const storePropsEDIT = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    dispatch(EDIT_PERSON_INFO(id, key, value));
  };

  const finishEditingHandler = async (e: React.MouseEvent<HTMLButtonElement>, currentPersonObj: personType) => {
    e.preventDefault();
    const { _id } = currentPersonObj;

    try {
      await axios.patch(`${apiURL}${_id}`, currentPersonObj);
    } catch (error) {
      console.log(error);
    }

    setEditPersonID('');
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
          dispatch(STORE_INITIAL_PEOPLE(people));
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
          return editItemId === person._id ? (
            <EditForm
              {...person}
              key={person._id}
              onClickHandler={finishEditingHandler}
              onChangeHandler={storePropsEDIT}
            />
          ) : (
            <Person key={person._id} {...person} onClickHandler={setEditPersonIDHandler} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
