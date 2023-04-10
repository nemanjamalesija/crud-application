import React from 'react';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { useGetPeopleData } from '../hooks/useGetPeople';
import { storePersonInfo } from '../reducers/personReducer';
import EditForm from './EditForm';
import Form from './Form';
import Person from './Person';

const People = () => {
  const { peopleSTATE, currentPersonID } = useGetPeopleData();
  const dispatch = useAppDispatch();

  const storeNewPersonHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.currentTarget.name;
    const value = e.currentTarget.value;

    dispatch(storePersonInfo({ key, value }));
  };

  const MemoizedForm = React.memo(Form);

  return (
    <div className='people-container'>
      <MemoizedForm onChangeHandler={storeNewPersonHandler} />
      {peopleSTATE.map((person) => {
        return currentPersonID === person._id ? (
          <EditForm key={person._id} {...person} />
        ) : (
          <Person key={person._id} {...person} />
        );
      })}
    </div>
  );
};

export default People;
