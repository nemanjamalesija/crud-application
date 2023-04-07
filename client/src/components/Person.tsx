import { personType } from '../types/personType';
import { apiURL } from '../constants/apiURL';
import { useDispatch } from 'react-redux';
import { DELETE_PERSON } from '../actions/peopleActions';
import axios from 'axios';

type personPropsType = personType & {
  onClickHandler: (id: string) => void;
};

const Person = ({ firstName, lastName, age, city, adress, createdDate, _id, onClickHandler }: personPropsType) => {
  const dispatch = useDispatch();

  const deletePersonHandler = async (id: string) => {
    await axios.delete(`${apiURL}/${_id}`);

    dispatch(DELETE_PERSON(id));
  };

  return (
    <article className='person-article'>
      <div className='person-div-control'>
        <h3 className='heading-tertiary'>{firstName}</h3>
      </div>
      <div className='person-div-control'>
        <h3 className='heading-tertiary'>{lastName}</h3>
      </div>
      <div className='person-div-control'>
        <p className='person-age'>{age}</p>
      </div>
      <address className='person-adress'>
        <p className='person-adress'>{city}</p>
        <p className='person-adress'>{adress}</p>
      </address>
      <p className='person-date'>{createdDate}</p>
      <div className='edit-delete-control'>
        <button className='btn btn-edit' onClick={() => onClickHandler(_id as string)}>
          Edit
        </button>
        <button className='btn btn-edit' onClick={() => deletePersonHandler(_id as string)}>
          Delete
        </button>
      </div>
    </article>
  );
};

export default Person;
