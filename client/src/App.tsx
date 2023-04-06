import axios from 'axios';
import { useEffect, useReducer } from 'react';
import { initialState } from './constants/initialState';
import { peopleReducer } from './reducers/peopleReducer';
import { STORE_INITIAL_PEOPLE } from './actions/actions';
import Person from './components/Person';
import Form from './components/Form';

function App() {
  const [state, dispatch] = useReducer(peopleReducer, initialState);

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

  if (!state.people) return <h1>Loading...</h1>;

  return (
    <div className='App'>
      <Form />
      <div className='people-container'>
        {state.people.map((person) => {
          return <Person key={person._id} {...person} />;
        })}
      </div>
    </div>
  );
}

export default App;
