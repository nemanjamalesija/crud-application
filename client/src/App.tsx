import { STORE_INITIAL_PEOPLE } from './actions/peopleActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './types/rootState';
import { nanoid } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { apiURL } from './constants/apiURL';
import Person from './components/Person';
import Form from './components/Form';
import axios from 'axios';

function App() {
  const { peopleSTATE, loading } = useSelector((state: RootState) => state.peopleReducer);
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
