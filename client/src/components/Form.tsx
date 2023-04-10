import React from 'react';
import { personType } from '../types/personType';
import { apiURL } from '../constants/apiURL';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { addNewPerson } from '../reducers/peopleReducer';
import { toggleForm } from '../reducers/globalStateReducer';
import { resetPersonState, storePersonInfo } from '../reducers/personReducer';
import { useGetPersonData } from '../hooks/useGetPersonData';
import axios from 'axios';

const Form = () => {
  const { firstName, lastName, age, city, adress, createdDate } = useGetPersonData();
  const { showMainForm } = useAppSelector((state) => state.globalStateReducer);
  const dispatch = useAppDispatch();

  const storeNewPersonHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    dispatch(storePersonInfo({ key, value }));
  };

  const createNewPersonHandler = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    newPerson: personType
  ) => {
    e.preventDefault();

    if (!firstName || !lastName || !age || !city || !adress)
      return alert('You must complete all fields');

    try {
      const response = await axios.post(apiURL, newPerson);
      const {
        data: {
          data: { newPerson: newPersonServerResponse },
        },
      } = response;

      dispatch(addNewPerson(newPersonServerResponse));
      dispatch(resetPersonState());
    } catch (error) {
      console.log(error);
    }

    dispatch(toggleForm());
  };

  return (
    <form className={`${showMainForm ? 'main-form ' : 'main-form hidden'}`}>
      <div className='form-control'>
        <label>Name</label>
        <input
          name='firstName'
          type='text'
          required
          value={firstName}
          placeholder='John'
          onChange={storeNewPersonHandler}
        />
      </div>
      <div className='form-control'>
        <label>Last Name</label>
        <input
          name='lastName'
          type='text'
          required
          value={lastName}
          placeholder='Doe'
          onChange={storeNewPersonHandler}
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
          onChange={storeNewPersonHandler}
        />
      </div>
      <div className='form-control'>
        <label>City</label>
        <input
          name='city'
          type='text'
          value={city}
          placeholder='New Orleans'
          onChange={storeNewPersonHandler}
        />
      </div>
      <div className='form-control'>
        <label>Adress</label>
        <input
          name='adress'
          type='text'
          value={adress}
          placeholder='1 My Place 81000'
          onChange={storeNewPersonHandler}
        />
      </div>
      <button
        className='btn btn-form'
        type='submit'
        onClick={(e) =>
          createNewPersonHandler(e, {
            firstName,
            lastName,
            age,
            city,
            adress,
            createdDate,
          })
        }
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
