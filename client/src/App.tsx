import axios from 'axios';
import { useEffect } from 'react';
import { STORE_INITIAL_PEOPLE } from './actions/peopleActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './types/rootState';
import { nanoid } from '@reduxjs/toolkit';
import Person from './components/Person';
import Form from './components/Form';

function App() {
  const people = useSelector((state: RootState) => state.peopleReducer.people);
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllUsers = async () => {
      const response = await axios('http://127.0.0.1:3000/api/people/');
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
