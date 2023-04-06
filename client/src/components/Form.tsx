import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types/rootState';
import { STORE_PERSON_INFO } from '../actions/personActions';
import { personType } from '../types/personType';
import axios from 'axios';
import { ADD_NEW_PERSON } from '../actions/peopleActions';

const Form = () => {
  const newPerson = useSelector((state: RootState) => state.personReducer.newPerson);
  const dispatch = useDispatch();

  const { firstName, lastName, age, city, adress } = newPerson;

  const storeNewPersonHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    dispatch(STORE_PERSON_INFO(key, value));
  };

  const createNewPersonHandler = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, newPerson: personType) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:3000/api/people/', newPerson);
      dispatch(ADD_NEW_PERSON(newPerson));

      console.log(newPerson);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form>
      <div className='form-control'>
        <label>Name</label>
        <input name='firstName' type='text' required value={firstName} onChange={storeNewPersonHandler} />
      </div>
      <div className='form-control'>
        <label>Last Name</label>
        <input name='lastName' type='text' required value={lastName} onChange={storeNewPersonHandler} />
      </div>
      <div className='form-control'>
        <label>Age</label>
        <input name='age' type='number' required value={age} onChange={storeNewPersonHandler} />
      </div>
      <div className='form-control'>
        <label>City</label>
        <input name='city' type='text' value={city} onChange={storeNewPersonHandler} />
      </div>
      <div className='form-control'>
        <label>Adress</label>
        <input name='adress' type='text' value={adress} onChange={storeNewPersonHandler} />
      </div>
      <button className='btn-form' type='submit' onClick={(e) => createNewPersonHandler(e, newPerson)}>
        Submit
      </button>
    </form>
  );
};

export default Form;
