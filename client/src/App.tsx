import { useAppDispatch } from './hooks/useAppDispatch';
import { useEffect } from 'react';
import { apiURL } from './constants/apiURL';
import Person from './components/Person';
import Form from './components/Form';
import EditForm from './components/EditForm';
import axios from 'axios';
import { storeInitialPeople } from './reducers/peopleReducer';
import { storePersonInfo } from './reducers/personReducer';
import Categories from './components/Categories';
import People from './components/People';
import { useAppSelector } from './hooks/useAppSelector';

function App() {
  const { loading } = useAppSelector((state) => state.peopleReducer);
  const dispatch = useAppDispatch();

  const storeNewPersonHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    dispatch(storePersonInfo({ key, value }));
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
    <div className='app'>
      <Form onChangeHandler={storeNewPersonHandler} />
      <h1 className='heading-primary'>Employee managment software</h1>
      <Categories />
      <People />
    </div>
  );
}

export default App;
