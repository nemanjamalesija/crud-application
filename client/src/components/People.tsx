import React from 'react';
import { useAppSelector } from '../hooks/useAppSelector';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { editPersonInfo, finishEditing } from '../reducers/peopleReducer';
import { personType } from '../types/personType';
import { apiURL } from '../constants/apiURL';
import axios from 'axios';
import EditForm from './EditForm';
import Person from './Person';

const People = () => {
  const { peopleSTATE, currentPersonID } = useAppSelector((state) => state.peopleReducer);
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
    <div className='people-container'>
      {peopleSTATE.map((person) => {
        return currentPersonID === person._id ? (
          <EditForm
            {...person}
            key={person._id}
            onClickHandler={finishEditingHandler}
            onChangeHandler={editPropsHandler}
          />
        ) : (
          <Person key={person._id} {...person} />
        );
      })}
    </div>
  );
};

export default People;
