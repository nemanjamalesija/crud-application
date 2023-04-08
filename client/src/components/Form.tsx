import React from 'react';
import { personType } from '../types/personType';
import { formType } from '../types/formTypes';
import { apiURL } from '../constants/apiURL';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addNewPerson } from '../reducers/peopleReducer';
import axios from 'axios';

const Form = ({ onChangeHandler }: formType) => {
  const newPerson = useAppSelector((state) => state.personReducer);
  const dispatch = useAppDispatch();

  const { firstName, lastName, age, city, adress } = newPerson;

  const createNewPersonHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    newPerson: personType
  ) => {
    e.preventDefault();

    try {
      const response = await axios.post(apiURL, newPerson);
      const {
        data: {
          data: { newPerson: newPersonServerResponse },
        },
      } = response;

      dispatch(addNewPerson(newPersonServerResponse));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className='main-form'>
      <div className='form-control'>
        <label>Name</label>
        <input
          name='firstName'
          type='text'
          required
          value={firstName}
          onChange={onChangeHandler}
        />
      </div>
      <div className='form-control'>
        <label>Last Name</label>
        <input
          name='lastName'
          type='text'
          required
          value={lastName}
          onChange={onChangeHandler}
        />
      </div>
      <div className='form-control'>
        <label>Age</label>
        <input
          name='age'
          type='number'
          required
          min={18}
          max={65}
          value={age}
          onChange={onChangeHandler}
        />
      </div>
      <div className='form-control'>
        <label>City</label>
        <input name='city' type='text' value={city} onChange={onChangeHandler} />
      </div>
      <div className='form-control'>
        <label>Adress</label>
        <input name='adress' type='text' value={adress} onChange={onChangeHandler} />
      </div>
      <button
        className='btn-form'
        type='submit'
        onClick={(e) => createNewPersonHandler(e, newPerson)}
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
