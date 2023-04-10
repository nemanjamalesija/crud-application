import Categories from './components/Categories';
import { useAppDispatch } from './hooks/useAppDispatch';
import { useAppSelector } from './hooks/useAppSelector';
import { toggleForm } from './reducers/globalStateReducer';
import { storePersonInfo } from './reducers/personReducer';
import { useGetPeopleData } from './hooks/useGetPeople';
import Form from './components/Form';
import Header from './components/Header';
import People from './components/People';

function App() {
  const { showMainForm } = useAppSelector((state) => state.globalStateReducer);
  const { loading, error } = useGetPeopleData();
  const dispatch = useAppDispatch();

  if (loading) return <h1>Loading...</h1>;

  if (error) return <h1>`Sorry, there has been an error: ${error}`</h1>;

  return (
    <div className='app'>
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
