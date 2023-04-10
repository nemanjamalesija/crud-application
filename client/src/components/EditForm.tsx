import axios from 'axios';
import { apiURL } from '../constants/apiURL';
import { formatDate } from '../helpers/formatDate';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { editPersonInfo, finishEditing } from '../reducers/peopleReducer';
import { personType } from '../types/personType';

const EditForm = ({
  firstName,
  lastName,
  age,
  city,
  adress,
  _id,
  createdDate,
}: personType) => {
  const dispatch = useAppDispatch();

  const editPropsHandler = (
    id: string | undefined,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!id) return;

    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    dispatch(editPersonInfo({ id, key, value }));
  };

  const finishEditingHandler = async (
    e: React.MouseEvent<HTMLButtonElement>,
    currentPersonObj: personType
  ) => {
    e.preventDefault();
    const { _id } = currentPersonObj;

    try {
      await axios.patch(`${apiURL}${_id}`, currentPersonObj);
    } catch (error) {
      console.log(error);
    }
    dispatch(finishEditing());
  };

  return (
    <form className='edit-form'>
      <div className='form-control'>
        <input
          name='firstName'
          type='text'
          value={firstName}
          onChange={(e) => editPropsHandler(_id, e)}
          required
        />
      </div>
      <div className='form-control'>
        <input
          name='lastName'
          type='text'
          value={lastName}
          onChange={(e) => editPropsHandler(_id, e)}
          required
        />
      </div>
      <div className='form-control'>
        <input
          name='age'
          type='number'
          value={age}
          onChange={(e) => editPropsHandler(_id, e)}
          required
        />
      </div>
      <div className='form-control'>
        <input
          name='city'
          type='text'
          value={city}
          onChange={(e) => editPropsHandler(_id, e)}
        />
      </div>
      <div className='form-control'>
        <input
          name='adress'
          type='text'
          value={adress}
          onChange={(e) => editPropsHandler(_id, e)}
        />
      </div>
      <p className='start-date-fixed'>{formatDate(createdDate)}</p>
      <div className='edit-delete-control'>
        <button
          className='btn btn-edit'
          type='submit'
          onClick={(e) =>
            finishEditingHandler(e, {
              _id,
              firstName,
              lastName,
              age,
              city,
              adress,
              createdDate,
            })
          }
        >
          Finish
        </button>
      </div>
    </form>
  );
};

export default EditForm;
