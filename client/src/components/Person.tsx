import { personType } from '../types/personType';
import { apiURL } from '../constants/apiURL';
import { useDispatch } from 'react-redux';
import { DELETE_PERSON } from '../actions/peopleActions';
import axios from 'axios';

const Person = ({ firstName, lastName, age, city, adress, date, _id }: personType) => {
  const dispatch = useDispatch();

  const deletePersonHandler = async (id: string) => {
    await axios.delete(`${apiURL}/${_id}`);

    dispatch(DELETE_PERSON(id));
  };

  return (
    <article className='person-article'>
      <header className='person-header'>
        <h3 className='heading-tertiary'>
          {firstName} {lastName}
        </h3>
      </header>
      <div className='person-bottom'>
        <p className='person-age'>{age}</p>
        <address>
          <p className='person-adress'>{city}</p>
          <p className='person-adress'>{adress}</p>
        </address>
        <p className='person-date'>{date}</p>
      </div>
      <div className='edit-delete-control'>
        <button className='btn btn-edit'>Edit</button>
        <button className='btn btn-edit' onClick={() => deletePersonHandler(_id as string)}>
          Delete
        </button>
      </div>
    </article>
  );
};

export default Person;
