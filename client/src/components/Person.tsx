import { personType } from '../types/personType';
import { apiURL } from '../constants/apiURL';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { deletePerson, setCurrentPersonID } from '../reducers/peopleReducer';
import { formatDate } from '../helpers/formatDate';
import axios from 'axios';
import { memo } from 'react';

const Person = ({
  firstName,
  lastName,
  age,
  city,
  adress,
  createdDate,
  _id,
}: personType) => {
  const dispatch = useAppDispatch();

  const deletePersonHandler = async (id: string | undefined) => {
    if (!id) return;

    await axios.delete(`${apiURL}/${_id}`);

    dispatch(deletePerson(id));
  };

  return (
    <article className='person-article'>
      <p className='person-info'>{firstName}</p>
      <p className='person-info'>{lastName}</p>
      <p className='person-age'>{age}</p>
      <p className='person-info'>{city}</p>
      <address className='person-info'>
        <p className='person-info'>{adress}</p>
      </address>
      <p className='person-info'>{formatDate(createdDate)}</p>
      <div className='edit-delete-control'>
        <button
          className='btn btn-edit'
          onClick={() => dispatch(setCurrentPersonID(_id))}
        >
          Edit
        </button>
        <button className='btn btn-delete' onClick={() => deletePersonHandler(_id)}>
          Delete
        </button>
      </div>
    </article>
  );
};

export default memo(Person);
