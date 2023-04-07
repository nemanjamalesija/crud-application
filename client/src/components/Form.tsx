import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_NEW_PERSON } from '../actions/peopleActions';
import { RootState } from '../types/rootState';
import { personType } from '../types/personType';
import { formType } from '../types/formTypes';
import { apiURL } from '../constants/apiURL';
import axios from 'axios';

const Form = ({ onChangeHandler }: formType) => {
  const newPerson = useSelector((state: RootState) => state.personReducer);
  const dispatch = useDispatch();

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
