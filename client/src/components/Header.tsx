import { useAppDispatch } from '../hooks/useAppDispatch';
import { toggleForm } from '../reducers/globalStateReducer';

const Header = () => {
  const dispatch = useAppDispatch();
  return (
    <header className='app-header'>
      <h1 className='heading-primary'>Employee managment software</h1>
      <button className='btn btn-header' onClick={() => dispatch(toggleForm())}>
        Add Employee
      </button>
    </header>
  );
};

export default Header;
