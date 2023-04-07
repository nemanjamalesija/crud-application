import { STORE_INITIAL_PEOPLE } from './actions/peopleActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './types/rootState';
import { nanoid } from '@reduxjs/toolkit';
import Person from './components/Person';
import Form from './components/Form';
import useFetchPeople from './hooks/useFetchPeople';
import { useEffect } from 'react';
import { STOP_LOADING } from './actions/generalStateActions';
import axios from 'axios';
import { apiURL } from './constants/apiURL';

function App() {
  const peopleSTATE = useSelector((state: RootState) => state.peopleReducer);
  const { loading } = useSelector((state: RootState) => state.generalStateReducer);
  const dispatch = useDispatch();

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
          dispatch(STOP_LOADING());
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
      <Form />
      <div className='people-container'>
        {peopleSTATE.map((person) => {
          return <Person key={person._id || nanoid()} {...person} />;
        })}
      </div>
    </div>
  );
}

export default App;
