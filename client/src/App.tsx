import axios from 'axios';
import { useEffect } from 'react';
import { STORE_INITIAL_PEOPLE } from './actions/actions';
import Person from './components/Person';
import Form from './components/Form';
import { useAppContext } from './context';

function App() {
  const {
    state: { people },
    dispatch,
  } = useAppContext();

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
          return <Person key={person._id} {...person} />;
        })}
      </div>
    </div>
  );
}

export default App;
