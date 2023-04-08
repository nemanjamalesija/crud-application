import React from 'react';
import { useDispatch } from 'react-redux';
import { ADD_NEW_PERSON } from '../actions/peopleActions';
import { personType } from '../types/personType';
import { formType } from '../types/formTypes';
import { apiURL } from '../constants/apiURL';
import axios from 'axios';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';

const Form = ({ onChangeHandler }: formType) => {
  const newPerson = useAppSelector((state) => state.personReducer);
  const dispatch = useAppDispatch();

  const { firstName, lastName, age, city, adress } = newPerson;

  const createNewPersonHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, newPerson: personType) => {
    e.preventDefault();

    try {
      const response = await axios.post(apiURL, newPerson);
      const {
        data: {
          data: { newPerson: newPersonServerResponse },
        },
      } = response;

      dispatch(ADD_NEW_PERSON(newPersonServerResponse));
    } catch (error) {
      console.log(error);
    }
  };

  console.log(newPerson);

  return (
    <form>
      <div className='form-control'>
        <label>Name</label>
        <input name='firstName' type='text' required value={firstName} onChange={onChangeHandler} />
      </div>
      <div className='form-control'>
        <label>Last Name</label>
        <input name='lastName' type='text' required value={lastName} onChange={onChangeHandler} />
      </div>
      <div className='form-control'>
        <label>Age</label>
        <input name='age' type='number' required value={age} onChange={onChangeHandler} />
      </div>
      <div className='form-control'>
        <label>City</label>
        <input name='city' type='text' value={city} onChange={onChangeHandler} />
      </div>
      <div className='form-control'>
        <label>Adress</label>
        <input name='adress' type='text' value={adress} onChange={onChangeHandler} />
      </div>
      <button className='btn-form' type='submit' onClick={(e) => createNewPersonHandler(e, newPerson)}>
        Submit
      </button>
    </form>
  );
};

export default Form;
