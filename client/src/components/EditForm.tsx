import { formatDate } from '../helpers/formatDate';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { finishEditing } from '../reducers/peopleReducer';
import { editFormType } from '../types/formTypes';

const EditForm = ({
  firstName,
  lastName,
  age,
  city,
  adress,
  _id,
  createdDate,
  onClickHandler,
  onChangeHandler,
}: editFormType) => {
  const dispatch = useAppDispatch();

  return (
    <form className='edit-form'>
      <div className='form-control'>
        <input
          name='firstName'
          type='text'
          value={firstName}
          onChange={(e) => onChangeHandler(_id, e)}
          required
        />
      </div>
      <div className='form-control'>
        <input
          name='lastName'
          type='text'
          value={lastName}
          onChange={(e) => onChangeHandler(_id, e)}
          required
        />
      </div>
      <div className='form-control'>
        <input
          name='age'
          type='number'
          value={age}
          onChange={(e) => onChangeHandler(_id, e)}
          required
        />
      </div>
      <div className='form-control'>
        <input
          name='city'
          type='text'
          value={city}
          onChange={(e) => onChangeHandler(_id, e)}
        />
      </div>
      <div className='form-control'>
        <input
          name='adress'
          type='text'
          value={adress}
          onChange={(e) => onChangeHandler(_id, e)}
        />
      </div>
      <p className='start-date-fixed'>{formatDate(createdDate)}</p>
      <div className='edit-delete-control'>
        <button
          className='btn btn-edit'
          type='submit'
          onClick={(e) =>
            onClickHandler(e, {
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
        <button
          className='btn btn-delete'
          type='submit'
          onClick={() => dispatch(finishEditing())}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditForm;
