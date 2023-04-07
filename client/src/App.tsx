import axios from 'axios';
import { useEffect } from 'react';
import { STORE_INITIAL_PEOPLE } from './actions/peopleActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './types/rootState';
import { nanoid } from '@reduxjs/toolkit';
import Person from './components/Person';
import Form from './components/Form';
import { apiURL } from './constants/apiURL';

function App() {
  const people = useSelector((state: RootState) => state.peopleReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllUsers = async () => {
      const response = await axios(apiURL);
      const {
        data: {
          data: { people },
        },
      } = response;

      dispatch(STORE_INITIAL_PEOPLE(people));
    };

    getAllUsers();
  }, []);

  if (!people) return <h1>Loading...</h1>;

  return (
    <div className='App'>
      <Form />
      <div className='people-container'>
        {people.map((person) => {
          return <Person key={person._id || nanoid()} {...person} />;
        })}
      </div>
    </div>
  );
}

export default App;
