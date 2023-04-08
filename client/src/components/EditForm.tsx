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
  return (
    <form>
      <div className='form-control'>
        <label>Name</label>
        <input
          name='firstName'
          type='text'
          required
          value={firstName}
          onChange={(e) => onChangeHandler(_id, e)}
        />
      </div>
      <div className='form-control'>
        <label>Last Name</label>
        <input
          name='lastName'
          type='text'
          required
          value={lastName}
          onChange={(e) => onChangeHandler(_id, e)}
        />
      </div>
      <div className='form-control'>
        <label>Age</label>
      </div>
      <div className='form-control'>
        <label>City</label>
        <input
          name='city'
          type='text'
          value={city}
          onChange={(e) => onChangeHandler(_id, e)}
        />
      </div>
      <div className='form-control'>
        <label>Adress</label>
        <input
          name='adress'
          type='text'
          value={adress}
          onChange={(e) => onChangeHandler(_id, e)}
        />
      </div>
      <button
        className='btn-form'
        type='submit'
        onClick={(e) =>
          onClickHandler(e, { _id, firstName, lastName, age, city, adress, createdDate })
        }
      >
        Finish editing
      </button>
    </form>
  );
};

export default EditForm;