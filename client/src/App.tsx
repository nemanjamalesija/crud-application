import { useAppDispatch } from './hooks/useAppDispatch';
import { useEffect } from 'react';
import { apiURL } from './constants/apiURL';
import Form from './components/Form';
import axios from 'axios';
import { storeInitialPeople } from './reducers/peopleReducer';
import { storePersonInfo } from './reducers/personReducer';
import Categories from './components/Categories';
import People from './components/People';
import { useAppSelector } from './hooks/useAppSelector';
import Header from './components/Header';
import { stopLoading, toggleForm } from './reducers/globalStateReducer';

function App() {
  const { loading, showMainForm } = useAppSelector((state) => state.globalStateReducer);
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
          dispatch(stopLoading());
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
      <Header />
      <Categories />
      <People />
      <div
        className={`${showMainForm ? 'overlay' : 'overlay hidden'}`}
        onClick={() => dispatch(toggleForm())}
      ></div>
    </div>
  );
}

export default App;
